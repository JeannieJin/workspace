#!/bin/bash

# permission-request.sh - PermissionRequest 이벤트 처리 및 Slack 알림

# utils.sh 불러오기
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck disable=SC1091
source "$SCRIPT_DIR/utils.sh"

# stdin에서 JSON 데이터 읽기
input=$(cat)

# 알림이 비활성화되어 있으면 조용히 종료
if ! is_notification_enabled; then
    exit 0
fi

# JSON 필드 추출
tool_name=$(extract_json_field "$input" "tool_name" "알 수 없음")
session_id=$(extract_json_field "$input" "session_id" "")
cwd=$(extract_json_field "$input" "cwd" "")

# 도구 입력 정보 추출
tool_input=$(echo "$input" | jq -r '.tool_input // {}' 2>/dev/null)
command=$(extract_json_field "$tool_input" "command" "")
description=$(extract_json_field "$tool_input" "description" "")
file_path=$(extract_json_field "$tool_input" "file_path" "")

# 타임스탬프 생성
timestamp=$(get_kst_timestamp)

# 세션 ID 마스킹
if [ -n "$session_id" ]; then
    session_id_masked=$(mask_session_id "$session_id")
else
    session_id_masked="알 수 없음"
fi

# 컨텍스트 정보 구성
context_info=""
if [ -n "$command" ]; then
    # 명령어가 너무 길면 자르기
    if [ ${#command} -gt 100 ]; then
        command="${command:0:100}..."
    fi
    context_info="명령어: $command"
elif [ -n "$file_path" ]; then
    context_info="파일: $file_path"
elif [ -n "$description" ]; then
    context_info="설명: $description"
fi

# Slack 메시지 구성
title="📋 권한 요청 알림"

message="요청 도구: $tool_name"

if [ -n "$context_info" ]; then
    message="$message
$context_info"
fi

message="$message

요청 시간: $timestamp
세션 ID: $session_id_masked"

if [ -n "$cwd" ]; then
    # 경로가 너무 길면 마지막 부분만 표시
    short_cwd=$(basename "$cwd")
    message="$message
작업 디렉토리: $short_cwd"
fi

# Slack 알림 전송
"$SCRIPT_DIR/slack-notify.sh" "$title" "$message" "warning"

# 로그 기록
log_info "PermissionRequest 이벤트 처리 완료: $tool_name"

exit 0
