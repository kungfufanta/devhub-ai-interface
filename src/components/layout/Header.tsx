import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const solutions = [
  { name: "OCR Solutions", href: "/solutions/ocr", description: "Số hóa tài liệu thông minh" },
  { name: "Text-to-Speech", href: "/solutions/tts", description: "Công nghệ tổng hợp giọng nói" },
  { name: "AI Integration", href: "/solutions/integration", description: "Tích hợp hệ thống AI" },
  { name: "Custom AI", href: "/solutions/custom", description: "Giải pháp AI tùy chỉnh" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <span className="text-sm font-bold text-primary-foreground">DH</span>
          </div>
          <span className="text-lg font-semibold">devhub.ai.vn</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Trang chủ
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                <span>Giải pháp</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              {solutions.map((solution) => (
                <DropdownMenuItem key={solution.href} asChild>
                  <Link to={solution.href} className="flex flex-col items-start py-2">
                    <span className="font-medium">{solution.name}</span>
                    <span className="text-xs text-muted-foreground">{solution.description}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/#why-us"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Tại sao chọn chúng tôi
          </Link>

          <Link
            to="/#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Liên hệ
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="hidden bg-gradient-to-r from-primary to-accent hover:opacity-90 md:inline-flex">
            Liên hệ tư vấn
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            <Link
              to="/"
              className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <div className="px-4 py-2">
              <span className="text-xs font-semibold uppercase text-muted-foreground">Giải pháp</span>
            </div>
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                to={solution.href}
                className="block rounded-lg px-6 py-2 text-sm hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {solution.name}
              </Link>
            ))}
            <Link
              to="/#why-us"
              className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tại sao chọn chúng tôi
            </Link>
            <Link
              to="/#contact"
              className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ
            </Link>
            <div className="px-4 pt-4">
              <Button className="w-full bg-gradient-to-r from-primary to-accent">
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
