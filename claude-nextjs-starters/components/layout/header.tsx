"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "./mobile-nav";
import { useScrollTo } from "@/hooks/use-scroll-to";

const navItems = [
  { label: "홈", href: "hero" },
  { label: "기능", href: "features" },
  { label: "가격", href: "pricing" },
  { label: "FAQ", href: "faq" },
  { label: "연락처", href: "contact" },
];

export function Header() {
  const { scrollToSection } = useScrollTo();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold hover:text-primary transition-colors"
        >
          스타터킷
        </button>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden md:flex">
            <Link href="/login">로그인</Link>
          </Button>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
