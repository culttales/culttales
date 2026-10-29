import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClosingInvite from "@/components/ClosingInvite";
import { getAllJournalPosts, getJournalPostBySlug } from "@/lib/journal";

type JournalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllJournalPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
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

export default async function JournalArticlePage({ params }: JournalPageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllJournalPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === post.slug);
  const next = allPosts[(currentIdx + 1) % allPosts.length];

  return (
    <article className="bg-paper text-char">
      <header className="px-5 pt-32 md:px-12 md:pt-44">
        <div className="mx-auto max-w-site">
          <div className="section-marker">
            <Link href="/journal" className="transition-colors hover:text-bronze">
              &larr; The journal
            </Link>
            <span className="hidden sm:inline">
              {post.date} &middot; {post.readTime} read
            </span>
          </div>
          <div className="mx-auto mt-14 max-w-3xl text-center md:mt-20">
            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-5 text-[2.75rem] font-light leading-[1.04] text-obsidian sm:text-6xl md:text-[72px]">
              {post.title}
            </h1>
            <p className="mt-6 font-display text-xl italic text-char/80 md:text-2xl">&ldquo;{post.excerpt}&rdquo;</p>
          </div>
          <div className="relative mx-auto mt-12 aspect-[4/3] max-w-[1240px] overflow-hidden rounded-2xl bg-sand shadow-xl md:mt-16 md:aspect-[16/9]">
            <Image
              src={post.image}
              alt=""
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1240px) 1240px, 100vw"
              className="object-cover"
              style={post.imageFocus ? { objectPosition: post.imageFocus } : undefined}
            />
          </div>
        </div>
      </header>

      <section className="px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-editorial space-y-7 text-base font-light leading-[1.9] text-char/90 md:text-lg">
          {post.body.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.5rem] first-letter:leading-[0.8] first-letter:text-obsidian"
                  : undefined
              }
            >
              {paragraph}
            </p>
          ))}
          <p className="pt-4 font-display text-xl italic text-bronze">Where culture becomes story.</p>
        </div>
      </section>

      {next && next.slug !== post.slug && (
        <section className="border-t border-line-dark bg-sand px-5 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <p className="mb-8 text-[11px] font-medium uppercase tracking-editorial text-muted">Next note</p>
            <Link
              href={`/journal/${next.slug}`}
              data-cursor="view"
              className="group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-paper">
                <Image
                  src={next.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="card-img object-cover"
                  style={next.imageFocus ? { objectPosition: next.imageFocus } : undefined}
                />
              </div>
              <div>
                <p className="eyebrow">{next.category}</p>
                <h2 className="mt-3 text-4xl leading-[1.08] text-obsidian md:text-5xl">{next.title}</h2>
                <span className="text-link mt-6">Read the note &rarr;</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <div className="pt-24 md:pt-36">
        <ClosingInvite eyebrow="Planning your own celebration?" />
      </div>
    </article>
  );
}
