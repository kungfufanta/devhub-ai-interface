import { Building2, Heart, Landmark, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    icon: Building2,
    industry: "Ngân hàng & Tài chính",
    title: "Xử lý hồ sơ tín dụng",
    description: "Tự động hóa quy trình xử lý đơn vay, xác minh giấy tờ và trích xuất thông tin khách hàng, giảm 70% thời gian xử lý.",
    stats: "Giảm 70% thời gian",
  },
  {
    icon: Heart,
    industry: "Y tế & Sức khỏe",
    title: "Số hóa hồ sơ bệnh án",
    description: "Chuyển đổi hồ sơ y tế giấy thành dữ liệu số, hỗ trợ tra cứu nhanh và bảo mật thông tin bệnh nhân.",
    stats: "99.5% độ chính xác",
  },
  {
    icon: Landmark,
    industry: "Cơ quan nhà nước",
    title: "Dịch vụ công trực tuyến",
    description: "Tự động xử lý đơn từ, giấy tờ công dân, cải thiện trải nghiệm dịch vụ công và giảm tải cho cán bộ.",
    stats: "50% tăng hiệu suất",
  },
  {
    icon: Truck,
    industry: "Logistics & Vận tải",
    title: "Quản lý vận đơn",
    description: "Tự động nhận dạng và xử lý thông tin vận đơn, hóa đơn xuất nhập khẩu, tối ưu hóa chuỗi cung ứng.",
    stats: "24/7 xử lý liên tục",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ứng dụng <span className="gradient-text">thực tế</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Giải pháp AI của chúng tôi đang được ứng dụng thành công 
            trong nhiều ngành nghề khác nhau.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader className="pb-4">
                  <div className="mb-2 flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">{useCase.industry}</span>
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">
                    {useCase.description}
                  </CardDescription>
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1">
                    <span className="text-sm font-medium text-primary">{useCase.stats}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
