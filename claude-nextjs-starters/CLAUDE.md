# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 15+ 기반의 한국어 랜딩 페이지 스타터킷입니다. TypeScript, Tailwind CSS v4, shadcn/ui, next-themes를 사용하여 다크모드를 지원하는 모던 웹 애플리케이션입니다.

## 개발 환경 설정

### 필수 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# ESLint 실행
npm run lint
```

### 기술 스택

- **프레임워크**: Next.js 16.1.1 (App Router)
- **언어**: TypeScript 5
- **스타일링**: Tailwind CSS v4 (PostCSS 플러그인)
- **UI 컴포넌트**: shadcn/ui (Radix UI 기반)
- **다크모드**: next-themes
- **아이콘**: lucide-react
- **애니메이션**: tw-animate-css

## 아키텍처 구조

### 디렉토리 구조

```
app/
  ├── layout.tsx          # 루트 레이아웃 (ThemeProvider, 폰트 설정)
  ├── page.tsx            # 홈페이지 (섹션 컴포넌트 조합)
  └── globals.css         # 글로벌 스타일 (Tailwind v4 설정, CSS 변수)

components/
  ├── ui/                 # shadcn/ui 컴포넌트 (재사용 가능한 기본 UI)
  │   ├── button.tsx      # CVA 기반 버튼 변형
  │   ├── card.tsx
  │   ├── badge.tsx
  │   ├── sheet.tsx
  │   ├── accordion.tsx
  │   └── separator.tsx
  ├── layout/             # 레이아웃 컴포넌트
  │   ├── header.tsx      # 헤더 (데스크탑/모바일 네비게이션)
  │   ├── footer.tsx      # 푸터
  │   └── mobile-nav.tsx  # 모바일 네비게이션 시트
  ├── sections/           # 페이지 섹션 컴포넌트
  │   ├── hero.tsx        # 히어로 섹션
  │   ├── features.tsx    # 기능 소개 섹션
  │   ├── pricing.tsx     # 가격 섹션
  │   ├── faq.tsx         # FAQ 섹션
  │   └── contact.tsx     # 문의 섹션
  └── theme-toggle.tsx    # 다크모드 토글 버튼

lib/
  └── utils.ts            # cn() 유틸리티 (clsx + tailwind-merge)
```

### 주요 아키텍처 패턴

1. **컴포넌트 계층 구조**
   - `app/page.tsx`가 섹션 컴포넌트들을 조합
   - 섹션 컴포넌트들이 UI 컴포넌트를 사용
   - 레이아웃 컴포넌트(Header, Footer)가 전체 구조를 감싸는 형태

2. **테마 시스템**
   - `next-themes`를 통한 다크모드 구현
   - `app/layout.tsx`에서 `ThemeProvider` 설정
   - `app/globals.css`에 CSS 변수로 라이트/다크 테마 색상 정의
   - `components/theme-toggle.tsx`에서 하이드레이션 이슈 처리

3. **스타일링 방식**
   - Tailwind CSS v4 사용 (PostCSS 플러그인 방식)
   - `@import "tailwindcss"` 및 `@import "tw-animate-css"`를 globals.css에서 import
   - `@theme inline` 블록에서 CSS 변수를 Tailwind 토큰으로 매핑
   - OKLCH 색상 공간 사용
   - CVA(class-variance-authority)로 컴포넌트 변형 관리

4. **TypeScript 설정**
   - Path alias: `@/*`는 프로젝트 루트를 가리킴
   - Strict 모드 활성화
   - JSX: react-jsx (React 19)

## 중요 컨벤션

### 컴포넌트 작성 규칙

1. **클라이언트 컴포넌트**
   - 상태, 이벤트 핸들러, 브라우저 API 사용 시 `"use client"` 선언 필수
   - 예: `theme-toggle.tsx`, `mobile-nav.tsx`

2. **스타일 유틸리티**
   - `cn()` 함수를 사용하여 조건부 클래스 병합
   - `import { cn } from "@/lib/utils"`

3. **shadcn/ui 컴포넌트 추가**
   - `npx shadcn@latest add <component-name>` 명령어 사용
   - 자동으로 `components/ui/` 디렉토리에 추가됨

4. **다크모드 대응**
   - Tailwind의 `dark:` 접두사 사용
   - CSS 변수는 `:root`와 `.dark` 클래스에서 각각 정의

### 코드 스타일

- 주석과 문자열: 한국어 사용
- 변수명/함수명: 영어 (camelCase)
- 컴포넌트명: PascalCase
- 파일명: kebab-case (섹션/레이아웃), PascalCase (UI 컴포넌트)

## 참고 사항

- Next.js 16은 React 19를 사용하므로 최신 React 기능 활용 가능
- Tailwind CSS v4는 PostCSS 플러그인 방식으로 동작 (별도 tailwind.config 파일 없음)
- Geist 폰트를 Google Fonts에서 로드하여 사용
- 하이드레이션 이슈 방지를 위해 테마 관련 컴포넌트에서 `suppressHydrationWarning` 및 `mounted` 상태 체크 사용
