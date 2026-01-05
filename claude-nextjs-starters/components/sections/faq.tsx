import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "이 스타터킷은 무료인가요?",
    answer:
      "네, 기본 버전은 완전히 무료이며 오픈소스입니다. 개인 및 상업 프로젝트에 자유롭게 사용하실 수 있습니다.",
  },
  {
    question: "어떤 기술 스택을 사용하나요?",
    answer:
      "Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react를 사용합니다. 모두 최신 버전의 안정적인 기술들입니다.",
  },
  {
    question: "커스터마이징이 가능한가요?",
    answer:
      "물론입니다! 모든 컴포넌트는 재사용 가능하도록 설계되었으며, Tailwind CSS와 CSS 변수를 통해 쉽게 스타일을 변경할 수 있습니다.",
  },
  {
    question: "반응형 디자인을 지원하나요?",
    answer:
      "네, 모바일부터 데스크톱까지 모든 화면 크기에서 완벽하게 작동하도록 설계되었습니다. 모바일 우선 접근 방식을 따릅니다.",
  },
  {
    question: "다크모드를 지원하나요?",
    answer:
      "네, next-themes를 사용하여 다크모드, 라이트모드, 시스템 테마 자동 감지를 지원합니다. 사용자 선택은 로컬 스토리지에 저장됩니다.",
  },
  {
    question: "상업적으로 사용할 수 있나요?",
    answer:
      "Free 플랜은 개인 프로젝트에 적합하며, 상업적 이용을 위해서는 Pro 플랜 이상을 추천드립니다. 자세한 라이선스 정보는 문서를 참조하세요.",
  },
  {
    question: "업데이트는 어떻게 받나요?",
    answer:
      "GitHub 저장소를 통해 정기적으로 업데이트를 제공합니다. Pro 플랜 이상 사용자는 평생 무료 업데이트를 받으실 수 있습니다.",
  },
  {
    question: "기술 지원이 제공되나요?",
    answer:
      "Free 플랜은 커뮤니티 지원을, Pro 플랜은 우선 지원을, Enterprise 플랜은 전담 지원팀을 제공합니다.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            자주 묻는 질문
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            궁금하신 점이 있으신가요? 여기에서 답을 찾아보세요
          </p>
        </div>

        {/* FAQ 아코디언 */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
