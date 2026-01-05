import { Github, Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 설명 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">스타터킷</h3>
            <p className="text-sm text-muted-foreground">
              빠르게 시작하는 모던 웹 개발
            </p>
          </div>

          {/* 제품 링크 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">제품</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  기능
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  가격
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* 회사 링크 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">회사</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  연락처
                </a>
              </li>
            </ul>
          </div>

          {/* 지원 링크 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">지원</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  문서
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  고객지원
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 하단 영역 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 스타터킷. All rights reserved.
          </p>

          {/* 소셜 미디어 링크 */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
