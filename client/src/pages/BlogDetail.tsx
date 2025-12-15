// src/pages/BlogDetail.tsx
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

type ApiBlogPost = {
  blogId: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  tags: string | null;
  isActive: boolean;
  isPublished: boolean;
  createdBy: string;
  createdDate: string;
  updatedBy?: string | null;
  updatedDate?: string | null;
  publishedDate?: string | null;
};

const API_URL = "https://blog.gittibilsms.com/front/GetBlogs";

type BlogDetailProps = {
  slug: string;
};

const getReadingTimeMinutes = (html: string): number => {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!text) return 1;
  const words = text.split(" ").length;
  return Math.max(1, Math.ceil(words / 200));
};

const formatDate = (value?: string | null): string | null => {
  if (!value) return null;
  const d = new Date(value);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogDetail: React.FC<BlogDetailProps> = ({ slug }) => {
  const { t } = useLanguage();
  const [post, setPost] = useState<ApiBlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);
        const text = await res.text();

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data: ApiBlogPost[] = JSON.parse(text);
        const visiblePosts = data.filter(
          (p) => p.isActive && p.isPublished
        );

        const found = visiblePosts.find((p) => p.slug === slug);
        if (!found) {
          setError(t({ en: "Post not found", tr: "Blog bulunamadı" }));
        } else {
          setPost(found);
        }
      } catch (err: any) {
        setError(err.message ?? "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, t]);

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground">
          {t({ en: "Loading blog...", tr: "Blog yükleniyor..." })}
        </p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-red-500">
          {error ?? t({ en: "Blog post not found.", tr: "Blog bulunamadı." })}
        </p>
      </div>
    );
  }

  const minutesToRead = getReadingTimeMinutes(post.content);
  const published = formatDate(post.publishedDate ?? post.createdDate);
  const tags = post.tags
    ? post.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="p-6 md:p-8 relative">
          {/* Back to Blog (Language aware) */}
          <Link
            href="/blog"
            className="absolute top-4 right-4 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← {t({ en: "Back to Blog", tr: "Blog’a Dön" })}
          </Link>

          <h1 className="text-3xl font-bold mb-3 mt-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
            <span>
              {t({ en: "By", tr: "Yazar" })} {post.createdBy}
            </span>

            {published && (
              <>
                <span>•</span>
                <span>{published}</span>
              </>
            )}

            <span>•</span>
            <span>
              {minutesToRead}{" "}
              {t({ en: "min read", tr: "dk okuma" })}
            </span>
          </div>

          {/* Category + Tags */}
          {(post.category || tags.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.category && (
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                  {post.category}
                </span>
              )}
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div
            className="prose max-w-none prose-sm sm:prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Card>
      </div>
    </div>
  );
};

export default BlogDetail;
