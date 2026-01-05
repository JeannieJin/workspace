import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* 뱃지 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Next.js 15와 함께하는 모던 웹 개발
            </span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            빠르게 시작하는
            <br />
            <span className="text-primary">모던 웹 스타터킷</span>
          </h1>

          {/* 서브타이틀 */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Next.js, TypeScript, Tailwind CSS, shadcn/ui로 제작된
            <br className="hidden sm:block" />
            프로덕션 레디 랜딩 페이지 템플릿
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-base">
              시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base"
            >
              문서 보기
            </Button>
          </div>

          {/* 추가 정보 */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>오픈소스</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>타입세이프</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>반응형 디자인</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
