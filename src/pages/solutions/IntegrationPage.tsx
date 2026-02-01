import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Cpu, CheckCircle, Plug, Code, Workflow, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const features = [
  {
    icon: Plug,
    title: "Tích hợp liền mạch",
    description: "Kết nối với ERP, CRM, DMS và các hệ thống doanh nghiệp hiện có mà không gián đoạn hoạt động.",
  },
  {
    icon: Code,
    title: "API linh hoạt",
    description: "RESTful API với tài liệu đầy đủ, SDK cho nhiều ngôn ngữ lập trình phổ biến.",
  },
  {
    icon: Workflow,
    title: "Tự động hóa quy trình",
    description: "Xây dựng workflow tự động kết hợp nhiều dịch vụ AI để tối ưu hóa hiệu suất.",
  },
  {
    icon: Shield,
    title: "Bảo mật cao",
    description: "Mã hóa dữ liệu, xác thực đa lớp và tuân thủ các tiêu chuẩn bảo mật quốc tế.",
  },
];

const platforms = [
  "SAP, Oracle, Microsoft Dynamics",
  "Salesforce, HubSpot CRM",
  "SharePoint, Google Workspace",
  "Custom ERP/CRM systems",
  "Mobile apps (iOS, Android)",
  "Web applications",
];

export default function IntegrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại trang chủ
            </Link>

            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                <Cpu className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                AI <span className="gradient-text">Integration</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Tích hợp các giải pháp AI vào hệ thống doanh nghiệp hiện có 
                một cách liền mạch, an toàn và hiệu quả.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                asChild
              >
                <Link to="/#contact">
                  Liên hệ tư vấn
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Tính năng <span className="gradient-text">nổi bật</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="transition-shadow hover:shadow-lg">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Nền tảng <span className="gradient-text">hỗ trợ</span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center space-x-3 rounded-lg bg-card p-4">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Tích hợp AI vào hệ thống của bạn</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Liên hệ để được tư vấn phương án tích hợp tối ưu cho doanh nghiệp.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                asChild
              >
                <Link to="/#contact">
                  Nhận tư vấn miễn phí
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
