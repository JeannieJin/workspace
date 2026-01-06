"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { useState } from "react";

const navItems = [
  { label: "홈", href: "hero" },
  { label: "기능", href: "features" },
  { label: "가격", href: "pricing" },
  { label: "FAQ", href: "faq" },
  { label: "연락처", href: "contact" },
];

export function MobileNav() {
  const { scrollToSection } = useScrollTo();
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    scrollToSection(href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>메뉴</SheetTitle>
          <SheetDescription>
            페이지의 다른 섹션으로 이동하세요
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-left text-lg font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="border-t pt-4 mt-4">
            <Button asChild className="w-full" size="lg">
              <Link href="/login">로그인</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
