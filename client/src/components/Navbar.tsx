import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: { en: 'Home', tr: 'Ana Sayfa' } },
    { path: '/about', label: { en: 'About', tr: 'Hakkımızda' } },
    { path: '/blog', label: { en: 'Blog', tr: 'Blog' } },
    { path: '/contact', label: { en: 'Contact', tr: 'İletişim' } },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <div className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
           <img
  src="/Gittibil_Logo_dark1.png"
  style={{ minWidth: "200px", width: "200px" }}
/>

            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.label.en.toLowerCase()}`}>
                <button
                  className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {t(link.label)}
                </button>
              </Link>
            ))}
            
           <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
  <button
    data-testid="button-lang-en"
    onClick={() => setLanguage('en')}
    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
      language === 'en'
        ? 'bg-background text-foreground shadow-sm'
        : 'text-muted-foreground hover-elevate'
    }`}
  >
    EN
  </button>

  <button
    data-testid="button-lang-tr"
    onClick={() => setLanguage('tr')}
    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
      language === 'tr'
        ? 'bg-background text-foreground shadow-sm'
        : 'text-muted-foreground hover-elevate'
    }`}
  >
    TR
  </button>
</div>

<button
  data-testid="button-portal"
  onClick={() => window.open('https://gittibilsms.com/', '_blank')}
  className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors bg-gradient-to-br from-green-500 to-blue-500 text-white hover:opacity-90 shadow-sm"
>
  Portal
</button>




          </div>

          <button
            data-testid="button-mobile-menu"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <button
                  data-testid={`link-mobile-${link.label.en.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 rounded-md transition-colors hover-elevate ${
                    isActive(link.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {t(link.label)}
                </button>
              </Link>
            ))}
            
            <div className="flex items-center gap-2 pt-4">
              <Button
                data-testid="button-mobile-lang-en"
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="flex-1"
              >
                English
              </Button>
              <Button
                data-testid="button-mobile-lang-tr"
                variant={language === 'tr' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('tr')}
                className="flex-1"
              >
                Türkçe
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
