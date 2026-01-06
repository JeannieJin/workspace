#!/bin/bash

# stop-event.sh - Stop 이벤트 처리 및 Slack 알림

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
session_id=$(extract_json_field "$input" "session_id" "")
cwd=$(extract_json_field "$input" "cwd" "")
reason=$(extract_json_field "$input" "reason" "정상 완료")

# 타임스탬프 생성
timestamp=$(get_kst_timestamp)

# 세션 ID 마스킹
if [ -n "$session_id" ]; then
    session_id_masked=$(mask_session_id "$session_id")
else
    session_id_masked="알 수 없음"
fi

# 완료 상태 결정
status="성공"
color="good"

# reason 필드에 따라 상태 결정
if echo "$reason" | grep -iq "error"; then
    status="오류 발생"
    color="danger"
elif echo "$reason" | grep -iq "cancelled"; then
    status="취소됨"
    color="warning"
fi

# Slack 메시지 구성
title="✅ 작업 완료"

message="세션 ID: $session_id_masked
완료 시간: $timestamp
상태: $status"

if [ "$reason" != "정상 완료" ] && [ -n "$reason" ]; then
    message="$message
사유: $reason"
fi

if [ -n "$cwd" ]; then
    # 경로가 너무 길면 마지막 부분만 표시
    short_cwd=$(basename "$cwd")
    message="$message
작업 디렉토리: $short_cwd"
fi

# Slack 알림 전송
"$SCRIPT_DIR/slack-notify.sh" "$title" "$message" "$color"

# 로그 기록
log_info "Stop 이벤트 처리 완료: $status (세션: $session_id_masked)"

exit 0
