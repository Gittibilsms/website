import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Zap, Lock, Globe, Rocket, MessageCircle, CheckCircle } from 'lucide-react';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: { en: 'Fast Shipping', tr: 'Hızlı Gönderim' },
      description: {
        en: '125 Intel Xeon® servers & 100GbE connections for 500M daily SMS capacity.',
        tr: '125 Intel Xeon® sunucu ve 100GbE bağlantı ile günde 500 milyon SMS kapasitesi.'
      }
    },
    {
      icon: Lock,
      title: { en: '256-Bit Encryption', tr: '256-Bit Şifreleme' },
      description: {
        en: 'All data stored securely with advanced encryption.',
        tr: 'Verileriniz bulutta güvenli bir şekilde saklanır.'
      }
    },
    {
      icon: Globe,
      title: { en: 'International Connection', tr: 'Uluslararası Bağlantı' },
      description: {
        en: 'Direct global operator links ensure uninterrupted delivery.',
        tr: 'Global operatörlerle doğrudan bağlantılar sayesinde kesintisiz SMS iletimi.'
      }
    },
    {
      icon: Rocket,
      title: { en: 'High Performance, Affordable Cost', tr: 'Yüksek Performans, Uygun Maliyet' },
      description: {
        en: 'Max efficiency at the best rates.',
        tr: 'Profesyonel altyapı, maksimum verimlilik.'
      }
    },
    {
      icon: MessageCircle,
      title: { en: '24/7 Professional Technical Support', tr: '7/24 Teknik Destek' },
      description: {
        en: 'Always online expert team.',
        tr: 'Uzman ekibimizle her zaman yanınızdayız.'
      }
    },
    {
      icon: CheckCircle,
      title: { en: '100% Delivery Guarantee', tr: '%100 Teslimat Garantisi' },
      description: {
        en: 'Optimized multi-server routing for instant SMS delivery.',
        tr: 'Akıllı platformumuzla mesajlarınız en yüksek hızda iletilir.'
      }
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t({ en: 'Why Choose Us', tr: 'Neden Bizi Seçmelisiniz' })}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t({
              en: 'Speed, Security, Global Reach, and 24/7 Support — trusted by 1000+ businesses across Türkiye.',
              tr: 'Hız, güvenlik, global erişim ve 7/24 destek — Türkiye genelinde 1000+ işletme tarafından güveniliyor.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-testid={`card-feature-${index}`}
              className="p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t(feature.title)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(feature.description)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
