import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileText, CheckCircle, Globe, Table, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const features = [
  {
    icon: Globe,
    title: "Đa ngôn ngữ",
    description: "Hỗ trợ tiếng Việt, Anh, Trung, Nhật, Hàn và 50+ ngôn ngữ khác với độ chính xác cao.",
  },
  {
    icon: PenTool,
    title: "Nhận dạng chữ viết tay",
    description: "Công nghệ AI tiên tiến nhận dạng chữ viết tay với nhiều phong cách khác nhau.",
  },
  {
    icon: Table,
    title: "Trích xuất bảng biểu",
    description: "Tự động phát hiện và trích xuất dữ liệu từ bảng biểu, form có cấu trúc phức tạp.",
  },
  {
    icon: FileText,
    title: "Xử lý đa định dạng",
    description: "Hỗ trợ PDF, ảnh chụp, scan tài liệu, hóa đơn, hợp đồng và nhiều loại giấy tờ khác.",
  },
];

const applications = [
  "Số hóa hồ sơ khách hàng ngân hàng",
  "Xử lý hóa đơn và chứng từ kế toán",
  "Trích xuất thông tin từ CMND/CCCD",
  "Số hóa hồ sơ y tế và bệnh án",
  "Xử lý đơn bảo hiểm tự động",
  "Quản lý vận đơn logistics",
];

export default function OCRPage() {
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
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                OCR <span className="gradient-text">Solutions</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Giải pháp nhận dạng ký tự quang học (OCR) thông minh, 
                chuyển đổi tài liệu giấy thành dữ liệu số với độ chính xác 99.5%.
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

        {/* Applications */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Ứng dụng <span className="gradient-text">thực tế</span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center space-x-3 rounded-lg bg-card p-4">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{app}</span>
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
              <h2 className="mb-4 text-3xl font-bold">Sẵn sàng số hóa doanh nghiệp?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Liên hệ để được tư vấn giải pháp OCR phù hợp nhất với nhu cầu của bạn.
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
