import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import smsMarketingImg from '@assets/generated_images/SMS_marketing_blog_thumbnail_5cac62a0.png';
import deliveryRatesImg from '@assets/generated_images/Delivery_rates_blog_thumbnail_0e03fda4.png';
import encryptionImg from '@assets/generated_images/Encryption_security_blog_thumbnail_aaafb069.png';
import businessImg from '@assets/generated_images/Business_selection_blog_thumbnail_be4d3cfe.png';
import automationImg from '@assets/generated_images/Automation_communication_blog_thumbnail_7a9b7e57.png';

export default function Blog() {
  const { t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      title: {
        en: 'Why Bulk SMS Services Are Essential for Modern Marketing',
        tr: 'Toplu SMS Hizmetleri Neden Modern Pazarlamanın Vazgeçilmezi?'
      },
      excerpt: {
        en: 'Discover how bulk SMS services have become a cornerstone of modern marketing strategies, offering unmatched reach and engagement rates.',
        tr: 'Toplu SMS hizmetlerinin modern pazarlama stratejilerinin temel taşı haline nasıl geldiğini ve benzersiz erişim ve etkileşim oranları sunduğunu keşfedin.'
      },
      image: smsMarketingImg
    },
    {
      title: {
        en: 'Top 5 Ways to Improve SMS Delivery Rates',
        tr: 'SMS Teslimat Oranlarını Artırmanın 5 Etkili Yolu'
      },
      excerpt: {
        en: 'Learn proven techniques to maximize your SMS delivery rates and ensure your messages reach their intended recipients every time.',
        tr: 'SMS teslimat oranlarınızı maksimize etmek ve mesajlarınızın her seferinde hedef alıcılara ulaşmasını sağlamak için kanıtlanmış teknikleri öğrenin.'
      },
      image: deliveryRatesImg
    },
    {
      title: {
        en: 'Secure Messaging: How 256-Bit Encryption Protects Your Data',
        tr: '256 Bit Şifreleme ile Mesajlarınız Nasıl Korunur?'
      },
      excerpt: {
        en: 'Understand the importance of 256-bit encryption in protecting your sensitive SMS data and maintaining customer trust.',
        tr: 'Hassas SMS verilerinizi korumak ve müşteri güvenini sürdürmek için 256 bit şifrelemenin önemini anlayın.'
      },
      image: encryptionImg
    },
    {
      title: {
        en: 'How to Choose the Right Bulk SMS Provider in Türkiye',
        tr: "Türkiye'de Doğru Toplu SMS Sağlayıcısı Nasıl Seçilir?"
      },
      excerpt: {
        en: 'A comprehensive guide to selecting the best bulk SMS provider for your business needs in the Turkish market.',
        tr: 'Türkiye pazarında işletmenizin ihtiyaçlarına en uygun toplu SMS sağlayıcısını seçmek için kapsamlı bir kılavuz.'
      },
      image: businessImg
    },
    {
      title: {
        en: 'Boost Your Business Communication with Automated Bulk SMS',
        tr: 'Otomatik Toplu SMS ile İşletme İletişiminizi Güçlendirin'
      },
      excerpt: {
        en: 'Explore how automated bulk SMS solutions can streamline your business communications and improve customer engagement.',
        tr: 'Otomatik toplu SMS çözümlerinin iş iletişiminizi nasıl kolaylaştırabileceğini ve müşteri etkileşimini nasıl artırabileceğini keşfedin.'
      },
      image: automationImg
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t({
              en: 'Insights & Tips on Bulk SMS Services',
              tr: 'Toplu SMS Hizmetleri Hakkında Bilgiler ve İpuçları'
            })}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t({
              en: 'Stay updated with the latest trends and best practices',
              tr: 'En son trendler ve en iyi uygulamalardan haberdar olun'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              data-testid={`card-blog-${index}`}
              className="overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={t(post.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {t(post.title)}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                  {t(post.excerpt)}
                </p>

                <Button
                  variant="ghost"
                  data-testid={`button-read-more-${index}`}
                  onClick={() => {
                    setSelectedPost(index);
                    console.log('Read more clicked for post:', index);
                  }}
                  className="group/button p-0 h-auto font-medium text-primary hover:bg-transparent"
                >
                  {t({ en: 'Read More', tr: 'Devamını Oku' })}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {selectedPost !== null && (
          <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              {t({
                en: `Selected post: ${blogPosts[selectedPost].title.en}`,
                tr: `Seçilen yazı: ${blogPosts[selectedPost].title.tr}`
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
