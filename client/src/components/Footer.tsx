import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Mail, Send, Users } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-4">
              Gittibilsms
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t({
                en: "Türkiye's trusted Bulk SMS service provider with fast, secure, and affordable solutions.",
                tr: "Türkiye'nin güvenilir Toplu SMS hizmet sağlayıcısı. Hızlı, güvenli ve uygun fiyatlı çözümler."
              })}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t({ en: 'Quick Links', tr: 'Hızlı Bağlantılar' })}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" data-testid="link-footer-home">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t({ en: 'Home', tr: 'Ana Sayfa' })}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t({ en: 'About', tr: 'Hakkımızda' })}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog" data-testid="link-footer-blog">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t({ en: 'Blog', tr: 'Blog' })}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t({ en: 'Contact', tr: 'İletişim' })}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t({ en: 'Contact', tr: 'İletişim' })}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:smsgittibil@gmail.com"
                  data-testid="link-email"
                  className="hover:text-foreground transition-colors"
                >
                  smsgittibil@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Send size={16} className="text-primary" />
                <a
                  href="https://t.me/Gittibilsms"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-telegram"
                  className="hover:text-foreground transition-colors"
                >
                  t.me/Gittibilsms
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users size={16} className="text-primary" />
                <span>smsgittibil@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t({ en: 'Business Hours', tr: 'Çalışma Saatleri' })}</h4>
            <p className="text-sm text-muted-foreground">
              {t({ en: '24/7 Support Available', tr: '7/24 Destek Hizmeti' })}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Gittibilsms. {t({ en: 'All rights reserved.', tr: 'Tüm hakları saklıdır.' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
