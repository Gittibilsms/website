import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import heroImage from '@assets/generated_images/Tech_server_room_hero_background_cecee0da.png';

export default function Hero() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          {t({
            en: "Türkiye's SMS Powerhouse — Fast, Secure & Affordable Bulk SMS Services",
            tr: "Türkiye'nin SMS Gücü — Hızlı, Güvenli ve Uygun Fiyatlı Toplu SMS Hizmetleri"
          })}
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t({
            en: "Your messages arrive instantly on the platform where speed and reliability meet.",
            tr: "Hız ve güvenilirliğin buluştuğu platformda mesajlarınız anında ulaşır."
          })}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            data-testid="button-get-started"
            size="lg"
            onClick={() => setLocation('/contact')}
            className="text-lg px-10 py-6"
          >
            {t({ en: 'Get Started', tr: 'Hemen Başla' })}
          </Button>
          <Button
            data-testid="button-contact-us"
            size="lg"
            variant="outline"
            onClick={() => setLocation('/contact')}
            className="text-lg px-10 py-6 backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            {t({ en: 'Contact Us', tr: 'İletişime Geç' })}
          </Button>
        </div>
      </div>
    </section>
  );
}
