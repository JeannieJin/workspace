#!/bin/bash

# utils.sh - Claude Code hooks용 공용 유틸리티 함수

# 환경 변수 로드
load_env() {
    local env_file="${CLAUDE_PROJECT_DIR:-.}/.claude/.env"
    if [ -f "$env_file" ]; then
        # shellcheck disable=SC1090
        source "$env_file"
    fi
}

# Webhook URL 검증
validate_webhook_url() {
    local url="$1"

    if [ -z "$url" ]; then
        return 1
    fi

    # Slack Webhook URL 형식 검증
    if [[ "$url" =~ ^https://hooks\.slack\.com/services/ ]]; then
        return 0
    else
        return 1
    fi
}

# JSON 필드 추출 (jq 사용)
extract_json_field() {
    local json="$1"
    local field="$2"
    local default="${3:-}"

    # jq가 설치되어 있는지 확인
    if ! command -v jq &> /dev/null; then
        echo "$default"
        return 1
    fi

    local value
    value=$(echo "$json" | jq -r ".$field // \"$default\"" 2>/dev/null)

    if [ -z "$value" ] || [ "$value" = "null" ]; then
        echo "$default"
    else
        echo "$value"
    fi
}

# ISO 8601 타임스탬프 생성
get_timestamp() {
    date -u +"%Y-%m-%dT%H:%M:%SZ"
}

# 한국 시간 타임스탬프 생성
get_kst_timestamp() {
    TZ='Asia/Seoul' date +"%Y-%m-%d %H:%M:%S KST"
}

# 에러 로깅
log_error() {
    local message="$1"
    local log_file="${CLAUDE_PROJECT_DIR:-.}/.claude/hooks/logs/hook.log"
    local timestamp
    timestamp=$(get_timestamp)

    # 로그 디렉토리가 없으면 생성
    mkdir -p "$(dirname "$log_file")"

    # 로그 파일에 기록 (Webhook URL은 절대 기록하지 않음)
    echo "[$timestamp] ERROR: $message" >> "$log_file"

    # stderr에도 출력 (verbose 모드용)
    echo "[$timestamp] ERROR: $message" >&2
}

# 정보 로깅
log_info() {
    local message="$1"
    local log_file="${CLAUDE_PROJECT_DIR:-.}/.claude/hooks/logs/hook.log"
    local timestamp
    timestamp=$(get_timestamp)

    # LOG_LEVEL이 INFO 이상일 때만 기록
    if [ "${LOG_LEVEL:-INFO}" = "INFO" ] || [ "${LOG_LEVEL:-INFO}" = "DEBUG" ]; then
        mkdir -p "$(dirname "$log_file")"
        echo "[$timestamp] INFO: $message" >> "$log_file"
    fi
}

# 세션 ID 마스킹 (보안)
mask_session_id() {
    local session_id="$1"
    local length=${#session_id}

    if [ "$length" -gt 8 ]; then
        echo "${session_id:0:6}..."
    else
        echo "$session_id"
    fi
}

# JSON 이스케이프
json_escape() {
    local str="$1"
    # 특수 문자 이스케이프
    str="${str//\\/\\\\}"  # 백슬래시
    str="${str//\"/\\\"}"  # 따옴표
    str="${str//$'\n'/\\n}"  # 줄바꿈
    str="${str//$'\r'/\\r}"  # 캐리지 리턴
    str="${str//$'\t'/\\t}"  # 탭
    echo "$str"
}

# Slack 알림 활성화 확인
is_notification_enabled() {
    load_env

    # SLACK_NOTIFICATION_ENABLED가 false면 비활성화
    if [ "${SLACK_NOTIFICATION_ENABLED:-true}" = "false" ]; then
        return 1
    fi

    # Webhook URL이 없으면 비활성화
    if [ -z "${SLACK_WEBHOOK_URL}" ]; then
        return 1
    fi

    return 0
}
