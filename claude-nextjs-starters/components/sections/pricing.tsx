import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "개인 프로젝트를 위한 완벽한 시작",
    features: [
      "기본 컴포넌트",
      "다크모드 지원",
      "반응형 디자인",
      "커뮤니티 지원",
    ],
    cta: "시작하기",
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "전문가를 위한 고급 기능",
    features: [
      "모든 Free 기능",
      "프리미엄 컴포넌트",
      "우선 지원",
      "고급 템플릿",
      "상업적 이용 가능",
      "평생 업데이트",
    ],
    cta: "Pro 시작하기",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "팀과 기업을 위한 솔루션",
    features: [
      "모든 Pro 기능",
      "무제한 프로젝트",
      "전담 지원팀",
      "커스텀 개발",
      "라이선스 관리",
      "SLA 보장",
    ],
    cta: "문의하기",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            합리적인 가격
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            프로젝트 규모에 맞는 플랜을 선택하세요
          </p>
        </div>

        {/* 가격 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 md:scale-110"
                  : "border-2"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1">인기</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/월</span>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
