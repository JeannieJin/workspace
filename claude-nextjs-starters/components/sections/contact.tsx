import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            시작할 준비가 되셨나요?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            지금 바로 프로젝트를 시작하거나 문의사항을 보내주세요
          </p>
        </div>

        {/* 연락 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">이메일 문의</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    궁금한 점이 있으시면 언제든지 연락주세요
                  </p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-primary hover:underline"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">실시간 채팅</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    빠른 답변이 필요하신가요? 채팅으로 문의하세요
                  </p>
                  <Button variant="outline" className="w-full sm:w-auto">
                    채팅 시작하기
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="p-8 rounded-lg bg-primary/5 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              지금 바로 시작하세요
            </h3>
            <p className="text-muted-foreground mb-6">
              몇 분 안에 멋진 랜딩 페이지를 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                <Send className="mr-2 h-5 w-5" />
                무료로 시작하기
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                데모 보기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
