import Image from "next/image";
import Link from "next/link";
import type { JournalPost } from "@/lib/journal";

export default function JournalList({ posts }: { posts: JournalPost[] }) {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/journal/${post.slug}`}
          data-cursor="view"
          className="group grid grid-cols-1 gap-6 border-t border-line-dark py-10 last:border-b md:grid-cols-[minmax(0,220px)_1fr_auto] md:items-center md:gap-10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-char/10 md:w-[220px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="220px"
              className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.05]"
            />
          </div>

          <div>
            <p className="mb-2 text-sm text-dust">
              {post.category} &middot; {post.date}
            </p>
            <h3 className="font-display text-2xl text-char transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
              {post.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm text-char/65">{post.excerpt}</p>
          </div>

          <span className="hidden text-sm text-char/50 md:block">
            {post.readTime}
          </span>
        </Link>
      ))}
    </div>
  );
}
