import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

import smsMarketingImg from "@assets/generated_images/SMS_marketing_blog_thumbnail_5cac62a0.png";
import deliveryRatesImg from "@assets/generated_images/Delivery_rates_blog_thumbnail_0e03fda4.png";
import encryptionImg from "@assets/generated_images/Encryption_security_blog_thumbnail_aaafb069.png";
import businessImg from "@assets/generated_images/Business_selection_blog_thumbnail_be4d3cfe.png";
import automationImg from "@assets/generated_images/Automation_communication_blog_thumbnail_7a9b7e57.png";

type ApiBlogPost = {
  blogId: number;
  title: string;
  slug: string;
  excerpt: string | null;          // from Excerpt column
  content: string;
  featureImageUrl: string | null;  // from FeatureImageUrl
  category: string | null;         // Category
  tags: string | null;             // could be CSV or JSON
  isActive: boolean;
  isPublished: boolean;
  createdBy: string;
  createdDate: string;
  updatedBy?: string | null;
  updatedDate?: string | null;
  publishedDate?: string | null;
};


//const API_URL = "https://localhost:7161/front/GetBlogs";
const API_URL = "https://blog.gittibilsms.com/front/GetBlogs";


const getFirstImageSrc = (html: string): string | null => {
  const match = html.match(/<img[^>]+src="([^">]+)"/i);
  return match ? match[1] : null;
};

const getExcerptFromHtml = (html: string, maxLength = 160): string => {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
};

export default function Blog() {
  const { t } = useLanguage();
  const [blogPosts, setBlogPosts] = useState<ApiBlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fallbackImages = [
    smsMarketingImg,
    deliveryRatesImg,
    encryptionImg,
    businessImg,
    automationImg,
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);
        const text = await res.text();
        console.log("Blog API raw response:", text);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data: ApiBlogPost[] = JSON.parse(text);
        const visiblePosts = data.filter(
          (post) => post.isActive && post.isPublished
        );
        setBlogPosts(visiblePosts);
      } catch (err: any) {
        console.error("Error fetching blogs:", err);
        setError(err.message ?? "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* header, loading, error, no posts ... */}

        {!loading && !error && blogPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const contentImage =
                getFirstImageSrc(post.content) ||
                fallbackImages[index % fallbackImages.length];

              const excerpt = getExcerptFromHtml(post.content);

              return (
                <Card
                  key={post.blogId}
                  className="overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={contentImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                      {excerpt}
                    </p>

                    <Button
                      asChild
                      variant="ghost"
                      className="group/button p-0 h-auto font-medium text-primary hover:bg-transparent"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t({ en: "Read More", tr: "Devamını Oku" })}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
