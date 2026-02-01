import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

const solutions = [
  { name: "OCR Solutions", href: "/solutions/ocr" },
  { name: "Text-to-Speech", href: "/solutions/tts" },
  { name: "AI Integration", href: "/solutions/integration" },
  { name: "Custom AI", href: "/solutions/custom" },
];

const company = [
  { name: "Trang chủ", href: "/" },
  { name: "Giải pháp", href: "/#services" },
  { name: "Tại sao chọn chúng tôi", href: "/#why-us" },
  { name: "Liên hệ", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="text-sm font-bold text-primary-foreground">DH</span>
              </div>
              <span className="text-lg font-semibold">devhub.ai.vn</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Đối tác công nghệ AI đáng tin cậy cho doanh nghiệp Việt Nam. 
              Chúng tôi cung cấp giải pháp OCR, Text-to-Speech và AI tùy chỉnh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Giải pháp</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Công ty</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@devhub.ai.vn</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+84 28 1234 5678</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Tòa nhà ABC, Quận 1, TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} devhub.ai.vn. Bảo lưu mọi quyền.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
