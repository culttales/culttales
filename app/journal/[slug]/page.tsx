import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealText from "@/components/RevealText";
import { getAllJournalPosts, getJournalPostBySlug, type JournalPost } from "@/lib/journal";

type JournalPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllJournalPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: JournalPageProps): Metadata {
  const post = getJournalPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function JournalPage({ params }: JournalPageProps) {
  const maybePost = getJournalPostBySlug(params.slug);
  if (!maybePost) notFound();
  const post = maybePost as JournalPost;

  const allPosts = getAllJournalPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === post.slug);
  const next = allPosts[(currentIdx + 1) % allPosts.length];

  return (
    <article className="bg-paper text-char">
      {/* Header */}
      <section className="border-b border-line-dark px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm text-dust">{post.category}</p>
          <h1 className="font-display text-display-md text-balance">{post.title}</h1>
          <p className="mt-4 text-sm text-char/70">
            {post.date} &middot; {post.readTime} read
          </p>
        </div>
      </section>

      {/* Featured image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Body */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-editorial">
          {post.body.map((paragraph, i) => (
            <p key={i} className="mb-6 text-base leading-relaxed text-char/80 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Next article CTA */}
      <section className="border-t border-line-dark bg-ink px-6 py-24 text-bone md:px-10 md:py-32">
        <div className="mx-auto max-w-frame">
          <p className="mb-8 text-sm text-dust">Next Article</p>
          <Link
            href={`/journal/${next.slug}`}
            data-cursor="view"
            className="group grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-14"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={next.image}
                alt={next.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.04]"
              />
            </div>
            <div>
              <p className="text-sm text-dust">{next.category}</p>
              <h3 className="mt-2 font-display text-display-sm text-balance">{next.title}</h3>
              <span className="link-draw mt-6 inline-block text-sm text-bone">
                Read article &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
