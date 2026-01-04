# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

버킷 리스트 관리 웹 애플리케이션. 프레임워크 없이 Vanilla JavaScript로 구현되었으며, LocalStorage를 사용하여 데이터를 저장합니다.

## Running the Application

```bash
# Python 간이 서버 사용
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속

# 또는 index.html을 브라우저에서 직접 열기
```

## Architecture

### 계층 구조
```
index.html (UI)
    ↓
js/app.js (BucketListApp 클래스 - 이벤트 처리, 렌더링)
    ↓
js/storage.js (BucketStorage 객체 - 데이터 CRUD, 필터링, 통계)
    ↓
LocalStorage (브라우저 저장소)
```

### 핵심 모듈

**js/storage.js - BucketStorage 객체**
- `load()` / `save()`: LocalStorage 읽기/쓰기
- `addItem()` / `updateItem()` / `deleteItem()`: CRUD 연산
- `toggleComplete()`: 완료 상태 토글
- `getFilteredList(filter)`: 'all' | 'active' | 'completed' 필터링
- `getStats()`: 통계 계산 (total, completed, progress, completionRate)

**js/app.js - BucketListApp 클래스**
- `cacheElements()`: DOM 요소 캐싱
- `bindEvents()`: 이벤트 핸들러 등록
- `render()`: 전체 UI 업데이트
- `escapeHtml()`: XSS 방지를 위한 HTML 이스케이프

### 데이터 모델
```javascript
{
  id: "timestamp",        // 생성 시간 기반 고유 ID
  title: "string",        // 버킷 리스트 제목
  completed: boolean,     // 완료 여부
  createdAt: "ISO8601",   // 생성 날짜
  completedAt: "ISO8601"  // 완료 날짜 (null if not completed)
}
```

## Styling

- Tailwind CSS (CDN)를 기본으로 사용
- 커스텀 스타일은 `css/styles.css`에 정의
- 다크 모드는 `@media (prefers-color-scheme: dark)` 자동 지원
