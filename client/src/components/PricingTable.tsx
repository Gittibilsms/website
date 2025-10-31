import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function PricingTable() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const packages = [
    {
      name: '100K SMS',
      price: '21,000₺',
      unitPrice: '0.21 Krş',
      popular: false
    },
    {
      name: '500K SMS',
      price: '100,000₺',
      unitPrice: '0.10 Krş',
      popular: true
    },
    {
      name: '1M SMS',
      price: '190,000₺',
      unitPrice: '0.19 Krş',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t({ en: 'Pricing Plans', tr: 'Fiyatlandırma' })}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t({
              en: 'Choose the perfect plan for your business needs',
              tr: 'İşletmeniz için en uygun paketi seçin'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              data-testid={`card-pricing-${index}`}
              className={`p-8 relative transition-all hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-primary shadow-xl' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-chart-2 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {t({ en: 'Most Popular', tr: 'En Popüler' })}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-muted-foreground">
                  {t({ en: 'Unit Price', tr: 'Birim Fiyat' })}: {pkg.unitPrice}
                </p>
              </div>

              <Button
                data-testid={`button-quote-${index}`}
                onClick={() => setLocation('/contact')}
                variant={pkg.popular ? 'default' : 'outline'}
                className="w-full"
              >
                {t({ en: 'Request a Quote', tr: 'Teklif Al' })}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full bg-card rounded-xl overflow-hidden shadow">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  {t({ en: 'Package', tr: 'Paket' })}
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  {t({ en: 'Price', tr: 'Fiyat' })}
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  {t({ en: 'Unit Price', tr: 'Birim Fiyat' })}
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <tr
                  key={index}
                  data-testid={`row-pricing-${index}`}
                  className="border-t hover-elevate"
                >
                  <td className="px-6 py-4 font-medium">{pkg.name}</td>
                  <td className="px-6 py-4">{pkg.price}</td>
                  <td className="px-6 py-4">{pkg.unitPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
