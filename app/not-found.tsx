import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { SHOW_JOURNAL } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <PageIntro
        label="Error 404 — page not found"
        title={
          <>
            This page has <em>wandered off.</em>
          </>
        }
        intro={`The link may be old, or the page may have moved. The stories${SHOW_JOURNAL ? ", films and journal" : " and films"} are all still here.`}
      />
      <section className="bg-paper px-5 pb-32 md:px-12 md:pb-44">
        <div className="mx-auto flex max-w-site flex-wrap items-center gap-4 border-t border-line-dark pt-12">
          <Link href="/" className="btn-dark">
            Back to the home page
          </Link>
          <Link href="/stories" className="btn-outline">
            Wedding stories
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
