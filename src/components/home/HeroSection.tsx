import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.15] dark:opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Glowing orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      {/* Floating document elements */}
      <div className="absolute left-10 top-20 hidden rotate-12 rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm lg:block">
        <div className="h-2 w-16 rounded bg-primary/30" />
        <div className="mt-2 h-2 w-12 rounded bg-muted" />
        <div className="mt-2 h-2 w-14 rounded bg-muted" />
      </div>
      <div className="absolute bottom-32 right-16 hidden -rotate-6 rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm lg:block">
        <div className="h-2 w-20 rounded bg-accent/30" />
        <div className="mt-2 h-2 w-16 rounded bg-muted" />
        <div className="mt-2 h-2 w-12 rounded bg-muted" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-border/50 bg-card/50 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Công nghệ AI hàng đầu Việt Nam</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Giải pháp{" "}
            <span className="gradient-text">AI Doanh nghiệp</span>
            <br />
            Đột phá Hiệu suất
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground lg:text-xl">
            Chuyển đổi số doanh nghiệp với công nghệ OCR, Text-to-Speech và AI tùy chỉnh. 
            Giải pháp bảo mật cao, tích hợp linh hoạt, hỗ trợ 24/7.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="glow bg-gradient-to-r from-primary to-accent px-8 hover:opacity-90"
              asChild
            >
              <Link to="/#contact">
                Liên hệ tư vấn
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link to="/#services">Khám phá giải pháp</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border/50 pt-10 md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-primary">99.5%</div>
              <div className="text-sm text-muted-foreground">Độ chính xác OCR</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Doanh nghiệp tin dùng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10M+</div>
              <div className="text-sm text-muted-foreground">Tài liệu xử lý/tháng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Hỗ trợ kỹ thuật</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
