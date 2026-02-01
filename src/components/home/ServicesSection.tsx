import { Link } from "react-router-dom";
import { FileText, Mic, Cpu, Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "OCR Solutions",
    description: "Số hóa tài liệu thông minh",
    details: "Nhận dạng văn bản đa ngôn ngữ, xử lý chữ viết tay, trích xuất bảng biểu và dữ liệu có cấu trúc với độ chính xác 99.5%.",
    href: "/solutions/ocr",
  },
  {
    icon: Mic,
    title: "Text-to-Speech",
    description: "Công nghệ tổng hợp giọng nói",
    details: "Chuyển đổi văn bản thành giọng nói tự nhiên với hỗ trợ tiếng Việt và các phương ngữ. Tích hợp dễ dàng vào ứng dụng.",
    href: "/solutions/tts",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Tích hợp hệ thống AI",
    details: "Kết nối và tích hợp các giải pháp AI vào hệ thống hiện có của doanh nghiệp một cách liền mạch và hiệu quả.",
    href: "/solutions/integration",
  },
  {
    icon: Wrench,
    title: "Custom AI Solutions",
    description: "Giải pháp AI tùy chỉnh",
    details: "Phát triển giải pháp AI riêng biệt theo yêu cầu cụ thể của doanh nghiệp, từ thiết kế đến triển khai.",
    href: "/solutions/custom",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Giải pháp <span className="gradient-text">AI toàn diện</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Từ số hóa tài liệu đến tổng hợp giọng nói, chúng tôi cung cấp 
            các giải pháp AI doanh nghiệp đáng tin cậy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.href} to={service.href} className="group">
                <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{service.details}</p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Tìm hiểu thêm
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
