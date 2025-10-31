import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Mail, Send, Users } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t({ en: 'About Gittibilsms', tr: 'Gittibilsms Hakkında' })}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t({
              en: 'Easy Management, Uninterrupted Communication — With our user-friendly panel, you can manage your customers and communication effortlessly.',
              tr: 'Kolay Yönetim, Kesintisiz İletişim — Kullanıcı dostu panelimizle müşterilerinize hızlı erişim.'
            })}
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t({ en: 'Our Capabilities', tr: 'Yeteneklerimiz' })}
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span>
                  {t({
                    en: 'High-volume sending, one-click access to millions.',
                    tr: 'Yüksek hacimli gönderim, tek panelden kolay yönetim.'
                  })}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span>
                  {t({
                    en: 'Secure, powerful, easy-to-use infrastructure.',
                    tr: 'Güçlü, güvenli ve sezgisel sistem altyapısı.'
                  })}
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-chart-2/5">
            <h2 className="text-2xl font-semibold mb-4">
              {t({ en: 'Our Mission', tr: 'Misyonumuz' })}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t({
                en: 'To empower businesses with fast, secure, and affordable Bulk SMS services across Türkiye and worldwide.',
                tr: 'İşletmelere hızlı, güvenli ve ekonomik toplu SMS çözümleri sunmak.'
              })}
            </p>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t({ en: 'Contact Information', tr: 'İletişim Bilgileri' })}
          </h2>
          <div className="grid gap-4">
            <Card className="p-6 flex items-center gap-4" data-testid="card-email">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t({ en: 'Email', tr: 'E-posta' })}</h3>
                <a
                  href="mailto:smsgittibil@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  smsgittibil@gmail.com
                </a>
              </div>
            </Card>

            <Card className="p-6 flex items-center gap-4" data-testid="card-telegram">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telegram</h3>
                <a
                  href="https://t.me/Gittibilsms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  t.me/Gittibilsms
                </a>
              </div>
            </Card>

            <Card className="p-6 flex items-center gap-4" data-testid="card-teams">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Microsoft Teams</h3>
                <span className="text-muted-foreground">smsgittibil@gmail.com</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
