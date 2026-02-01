import { Mail, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Liên hệ <span className="gradient-text">tư vấn</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ 
              tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">contact@devhub.ai.vn</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Hotline</div>
                  <div className="font-medium">+84 28 1234 5678</div>
                </div>
              </div>

              <div className="mt-8 flex items-start space-x-3 rounded-lg border border-border/50 bg-card p-4">
                <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  Thông tin của bạn được bảo mật và chỉ sử dụng cho mục đích tư vấn. 
                  Chúng tôi cam kết không chia sẻ dữ liệu với bên thứ ba.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-2xl bg-card p-6 shadow-sm lg:p-8">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Tên công ty <span className="text-destructive">*</span>
                  </label>
                  <Input id="company" placeholder="Công ty ABC" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Người liên hệ <span className="text-destructive">*</span>
                  </label>
                  <Input id="name" placeholder="Nguyễn Văn A" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input id="email" type="email" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Số điện thoại
                  </label>
                  <Input id="phone" placeholder="0901 234 567" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Giải pháp quan tâm
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn giải pháp" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ocr">OCR Solutions</SelectItem>
                    <SelectItem value="tts">Text-to-Speech</SelectItem>
                    <SelectItem value="integration">AI Integration</SelectItem>
                    <SelectItem value="custom">Custom AI Solutions</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Nội dung
                </label>
                <Textarea
                  id="message"
                  placeholder="Mô tả nhu cầu của bạn..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Gửi yêu cầu tư vấn
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
