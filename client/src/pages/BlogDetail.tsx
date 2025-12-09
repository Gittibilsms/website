// src/pages/BlogDetail.tsx
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

type ApiBlogPost = {
  blogId: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  // featureImageUrl removed
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

const API_URL = "https://localhost:7161/front/GetBlogs";

type BlogDetailProps = {
  slug: string;
};

const getReadingTimeMinutes = (html: string): number => {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!text) return 1;
  const words = text.split(" ").length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
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
        console.log("Blog detail raw response:", text);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data: ApiBlogPost[] = JSON.parse(text);

        const visiblePosts = data.filter(
          (p) => p.isActive && p.isPublished
        );

        const found = visiblePosts.find((p) => p.slug === slug);
        if (!found) {
          setError("Post not found");
        } else {
          setPost(found);
        }
      } catch (err: any) {
        console.error("Error fetching blog detail:", err);
        setError(err.message ?? "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground">Loading blog...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-red-500">
          {error ?? "Blog post not found."}
        </p>
      </div>
    );
  }

  const minutesToRead = getReadingTimeMinutes(post.content);
  const published = formatDate(post.publishedDate ?? post.createdDate);
  const tags = post.tags
    ? post.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-3">{post.title}</h1>

          {/* Meta: author, date, reading time */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
            <span>By {post.createdBy}</span>
            {published && (
              <>
                <span>•</span>
                <span>{published}</span>
              </>
            )}
            <>
              <span>•</span>
              <span>{minutesToRead} min read</span>
            </>
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
