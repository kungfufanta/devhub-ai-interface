import { Shield, Settings, Users, Headphones, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Giải pháp đo ni đóng giày",
    description: "Mỗi giải pháp được thiết kế riêng theo nhu cầu và quy trình kinh doanh cụ thể của doanh nghiệp.",
  },
  {
    icon: Shield,
    title: "Bảo mật dữ liệu cao cấp",
    description: "Tuân thủ các tiêu chuẩn bảo mật quốc tế, mã hóa end-to-end và cam kết bảo mật dữ liệu khách hàng.",
  },
  {
    icon: Users,
    title: "Đối tác dài hạn",
    description: "Không chỉ là nhà cung cấp, chúng tôi là đối tác đồng hành cùng sự phát triển của doanh nghiệp.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ mọi lúc, đảm bảo hệ thống vận hành ổn định.",
  },
];

const benefits = [
  "Tích hợp nhanh chóng với hệ thống hiện có",
  "API linh hoạt và tài liệu đầy đủ",
  "Mô hình giá cả linh hoạt theo nhu cầu",
  "Đào tạo và chuyển giao công nghệ",
  "Cập nhật và nâng cấp liên tục",
  "Báo cáo và phân tích chi tiết",
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tại sao chọn <span className="gradient-text">DevHub AI</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Chúng tôi cam kết mang đến giải pháp AI chất lượng cao, 
            bảo mật và phù hợp với doanh nghiệp Việt Nam.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Benefits List */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-card p-8 shadow-sm lg:p-12">
          <h3 className="mb-6 text-center text-xl font-semibold">
            Lợi ích khi hợp tác với chúng tôi
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
