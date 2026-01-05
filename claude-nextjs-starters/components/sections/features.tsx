import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Palette, Code2, Rocket, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "초고속 성능",
    description: "Next.js 15의 App Router와 React 19를 활용한 최적화된 성능을 경험하세요.",
  },
  {
    icon: Shield,
    title: "타입 안정성",
    description: "TypeScript로 작성되어 컴파일 타임에 오류를 방지하고 개발 생산성을 향상시킵니다.",
  },
  {
    icon: Palette,
    title: "아름다운 UI",
    description: "shadcn/ui와 Tailwind CSS로 제작된 세련되고 커스터마이징 가능한 컴포넌트를 제공합니다.",
  },
  {
    icon: Code2,
    title: "개발자 친화적",
    description: "명확한 코드 구조와 재사용 가능한 컴포넌트로 빠른 개발이 가능합니다.",
  },
  {
    icon: Rocket,
    title: "프로덕션 레디",
    description: "즉시 배포 가능한 최적화된 설정과 SEO 친화적인 구조를 제공합니다.",
  },
  {
    icon: Smartphone,
    title: "완벽한 반응형",
    description: "모든 디바이스에서 완벽하게 작동하는 모바일 우선 디자인을 지원합니다.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            강력한 기능들
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            모던 웹 개발에 필요한 모든 것이 준비되어 있습니다
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-colors duration-300"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
