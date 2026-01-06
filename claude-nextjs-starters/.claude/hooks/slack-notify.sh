#!/bin/bash

# slack-notify.sh - Slack Webhook으로 메시지 전송

# utils.sh 불러오기
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck disable=SC1091
source "$SCRIPT_DIR/utils.sh"

# 사용법 출력
usage() {
    echo "사용법: $0 <title> <message> [color]"
    echo "  title: 메시지 제목"
    echo "  message: 메시지 내용"
    echo "  color: 선택적, 메시지 색상 (good|warning|danger, 기본값: good)"
    exit 1
}

# Slack에 메시지 전송
send_slack_message() {
    local title="$1"
    local message="$2"
    local color="${3:-good}"

    # 환경 변수 로드
    load_env

    # 알림이 비활성화되어 있으면 조용히 종료
    if ! is_notification_enabled; then
        log_info "Slack 알림이 비활성화되어 있습니다."
        exit 0
    fi

    # Webhook URL 검증
    if ! validate_webhook_url "$SLACK_WEBHOOK_URL"; then
        log_error "유효하지 않은 Slack Webhook URL입니다."
        exit 0  # 비차단 오류
    fi

    # 타임아웃 설정
    local timeout="${HOOK_TIMEOUT:-10}"

    # 사용자 정보
    local username="${SLACK_USERNAME:-Claude Code Bot}"
    local icon_emoji="${SLACK_ICON_EMOJI:-:robot_face:}"

    # JSON 이스케이프
    title=$(json_escape "$title")
    message=$(json_escape "$message")

    # Slack Block Kit 메시지 생성
    local payload
    payload=$(cat <<EOF
{
    "username": "$username",
    "icon_emoji": "$icon_emoji",
    "attachments": [
        {
            "color": "$color",
            "title": "$title",
            "text": "$message",
            "footer": "Claude Code",
            "footer_icon": "https://www.anthropic.com/favicon.ico",
            "ts": $(date +%s)
        }
    ]
}
EOF
)

    # curl로 Slack Webhook 호출
    local http_code
    http_code=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$SLACK_WEBHOOK_URL" \
        -H 'Content-Type: application/json' \
        -d "$payload" \
        --max-time "$timeout" \
        2>&1)

    # 응답 검증
    if [ "$http_code" -eq 200 ]; then
        log_info "Slack 알림 전송 성공: $title"
        exit 0
    else
        log_error "Slack 알림 전송 실패 (HTTP $http_code)"
        exit 0  # 비차단 오류
    fi
}

# 메인 실행
main() {
    # 인자 확인
    if [ $# -lt 2 ]; then
        usage
    fi

    local title="$1"
    local message="$2"
    local color="${3:-good}"

    send_slack_message "$title" "$message" "$color"
}

# 스크립트 직접 실행 시
if [ "${BASH_SOURCE[0]}" = "${0}" ]; then
    main "$@"
fi
