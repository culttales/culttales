import Image from "next/image";
import Link from "next/link";
import type { JournalPost } from "@/lib/journal";

/** The latest note large, the rest as a row of tall cards. */
export default function JournalList({ posts }: { posts: JournalPost[] }) {
  const [lead, ...rest] = posts;
  if (!lead) return null;

  return (
    <div className="space-y-16 md:space-y-20">
      <Link
        href={`/journal/${lead.slug}`}
        data-cursor="view"
        className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand shadow-lg md:col-span-7 md:aspect-[16/10]">
          <Image
            src={lead.image}
            alt=""
            fill
            loading="eager"
            sizes="(min-width: 1440px) 780px, (min-width: 768px) 56vw, 100vw"
            className="card-img object-cover"
            style={lead.imageFocus ? { objectPosition: lead.imageFocus } : undefined}
          />
        </div>
        <div className="md:col-span-5">
          <p className="eyebrow">
            {lead.category} &middot; {lead.date}
          </p>
          <h2 className="mt-4 text-4xl leading-[1.08] text-obsidian transition-colors duration-500 group-hover:text-bronze md:text-5xl">
            {lead.title}
          </h2>
          <p className="mt-5 font-display text-xl italic leading-snug text-char/80">&ldquo;{lead.excerpt}&rdquo;</p>
          <span className="text-link mt-7">Read the note &middot; {lead.readTime} &rarr;</span>
        </div>
      </Link>

      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 border-t border-line-dark pt-14 md:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} data-cursor="view" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-md">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 440px, (min-width: 768px) 30vw, 100vw"
                  className="card-img object-cover"
                  style={post.imageFocus ? { objectPosition: post.imageFocus } : undefined}
                />
              </div>
              <p className="eyebrow mt-5 text-[10px]">
                {post.category} &middot; {post.date}
              </p>
              <h3 className="mt-2 text-2xl leading-tight text-obsidian transition-colors duration-500 group-hover:text-bronze md:text-[1.75rem]">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm font-light leading-relaxed text-char/75">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
