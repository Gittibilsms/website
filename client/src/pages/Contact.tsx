import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, Users } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: t({ en: 'Message Sent!', tr: 'Mesaj Gönderildi!' }),
      description: t({
        en: 'Thank you for contacting us. We will get back to you soon.',
        tr: 'Bizimle iletişime geçtiğiniz için teşekkür ederiz. En kısa sürede size dönüş yapacağız.'
      })
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t({
              en: 'Get in Touch with Gittibilsms',
              tr: 'Gittibilsms ile İletişime Geçin'
            })}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t({
              en: "We're here to help you with your SMS needs",
              tr: 'SMS ihtiyaçlarınız için buradayız'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">
                    {t({ en: 'Name', tr: 'Ad' })}
                  </Label>
                  <Input
                    id="name"
                    data-testid="input-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">
                    {t({ en: 'Email', tr: 'E-posta' })}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="input-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">
                    {t({ en: 'Phone', tr: 'Telefon' })}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    data-testid="input-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">
                    {t({ en: 'Message', tr: 'Mesaj' })}
                  </Label>
                  <Textarea
                    id="message"
                    data-testid="input-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="button-submit"
                  className="w-full"
                  size="lg"
                >
                  {t({ en: 'Send Message', tr: 'Gönder' })}
                </Button>
              </form>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6" data-testid="card-contact-email">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t({ en: 'Email', tr: 'E-posta' })}</h3>
                  <a
                    href="mailto:smsgittibil@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    smsgittibil@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6" data-testid="card-contact-telegram">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Telegram</h3>
                  <a
                    href="https://t.me/Gittibilsms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    t.me/Gittibilsms
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6" data-testid="card-contact-teams">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Microsoft Teams</h3>
                  <span className="text-muted-foreground text-sm">smsgittibil@gmail.com</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-chart-2/5">
              <h3 className="font-semibold mb-2">
                {t({ en: 'Business Hours', tr: 'Çalışma Saatleri' })}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t({
                  en: '24/7 Support Available',
                  tr: '7/24 Destek Hizmeti'
                })}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
