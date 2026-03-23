import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogPost {
  imageId: string;
  imageExt?: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    imageId: "RGfu08KlwVpp5hzDHY9U1bfT5hk",
    imageExt: "jpg",
    category: "Personal Finance",
    title: "5 ways to automate your savings and build wealth faster",
    excerpt:
      "Automation is the secret weapon of the financially successful. Here's how to set it up in under 10 minutes.",
    author: "Sarah Mitchell",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    slug: "automate-savings",
  },
  {
    imageId: "zKvxl8n4RerKXUc55rqYbdXIhMI",
    imageExt: "jpg",
    category: "Investing",
    title: "Understanding portfolio rebalancing: a beginner's guide",
    excerpt:
      "Rebalancing keeps your risk in check and your returns on target. Learn when, why, and how to do it.",
    author: "James Park",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    slug: "portfolio-rebalancing",
  },
  {
    imageId: "WBND29136W9GXGE9Nrin4RdOwoM",
    imageExt: "jpg",
    category: "Budgeting",
    title: "The 50/30/20 rule revisited: does it still work in 2025?",
    excerpt:
      "With rising costs and changing income patterns, we revisit the classic budgeting framework for modern life.",
    author: "Olivia Chen",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    slug: "503020-rule",
  },
] as const;

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border border-brand-dark-border/50 bg-brand-card-bg overflow-hidden",
        "hover:border-brand-dark-border hover:bg-brand-dark-card transition-all duration-300 group"
      )}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`https://proxy.extractcss.dev/https://framerusercontent.com/images/${post.imageId}.${post.imageExt ?? "jpg"}`}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card-bg/60 to-transparent" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium bg-brand-dark-pill/90 text-brand-accent border border-brand-accent/20 px-3 py-1 rounded-full font-manrope">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-poppins font-semibold text-brand-near-white text-base leading-snug line-clamp-2 group-hover:text-brand-pale-blue transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-sm text-brand-gray-body font-manrope leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-brand-dark-border/30 mt-auto">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-brand-dark-pill flex items-center justify-center text-brand-accent text-xs font-bold font-poppins">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs text-brand-body-alt font-manrope">
              {post.author}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-brand-body-alt font-manrope">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className="py-24 px-4" id="blog">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-brand-muted-blue font-manrope uppercase tracking-widest">
                Blog
              </span>
            </div>
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-brand-near-white leading-tight">
              Finance tips & insights
            </h2>
          </div>
          <Link
            href="#"
            className="text-sm font-medium text-brand-accent hover:bg-brand-accent hover:text-white border border-brand-accent/30 hover:border-brand-accent px-5 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap"
          >
            View all posts
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
