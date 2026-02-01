import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Wrench, CheckCircle, Lightbulb, Target, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const features = [
  {
    icon: Lightbulb,
    title: "Tư vấn chuyên sâu",
    description: "Đội ngũ chuyên gia phân tích nhu cầu và đề xuất giải pháp AI phù hợp với bài toán của bạn.",
  },
  {
    icon: Target,
    title: "Phát triển theo yêu cầu",
    description: "Xây dựng mô hình AI từ đầu hoặc fine-tune model có sẵn cho nghiệp vụ cụ thể.",
  },
  {
    icon: Users,
    title: "Đào tạo & chuyển giao",
    description: "Hỗ trợ đào tạo đội ngũ kỹ thuật và chuyển giao công nghệ đầy đủ.",
  },
  {
    icon: Rocket,
    title: "Triển khai & vận hành",
    description: "Hỗ trợ triển khai on-premise hoặc cloud, đảm bảo hiệu suất và độ ổn định.",
  },
];

const process = [
  { step: "01", title: "Khảo sát & Phân tích", description: "Tìm hiểu quy trình, dữ liệu và mục tiêu kinh doanh" },
  { step: "02", title: "Thiết kế giải pháp", description: "Đề xuất kiến trúc và phương án kỹ thuật tối ưu" },
  { step: "03", title: "Phát triển & Huấn luyện", description: "Xây dựng và huấn luyện mô hình AI chuyên biệt" },
  { step: "04", title: "Kiểm thử & Tối ưu", description: "Đánh giá hiệu năng và tinh chỉnh để đạt mục tiêu" },
  { step: "05", title: "Triển khai & Bàn giao", description: "Go-live và chuyển giao công nghệ cho đội ngũ nội bộ" },
  { step: "06", title: "Hỗ trợ & Bảo trì", description: "Đồng hành cùng doanh nghiệp trong suốt vòng đời sản phẩm" },
];

export default function CustomPage() {
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
                <Wrench className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Custom <span className="gradient-text">AI Solutions</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Phát triển giải pháp AI riêng biệt, thiết kế theo nhu cầu 
                và quy trình kinh doanh cụ thể của doanh nghiệp.
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
              Dịch vụ <span className="gradient-text">cung cấp</span>
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

        {/* Process */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Quy trình <span className="gradient-text">triển khai</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((item, index) => (
                <div key={index} className="rounded-xl bg-card p-6">
                  <div className="mb-4 text-3xl font-bold text-primary">{item.step}</div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Bắt đầu dự án AI của bạn</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Chia sẻ bài toán, chúng tôi sẽ đề xuất giải pháp AI phù hợp nhất.
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
