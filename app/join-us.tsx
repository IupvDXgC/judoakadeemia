import Link from "next/link";

export default function JoinUs() {
  return (
    <section id="join-us" className="scroll-mt-16 border-t border-brand/20">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-brand">Liitu meiega</h2>
        <p className="mb-6 text-zinc-600">
          Soovid liituda Judoakadeemiaga? Täida liikmetaotlus ja alusta treeningutega.
        </p>
        <Link
          href="/join-us"
          className="inline-block rounded bg-brand px-5 py-2 hover:bg-brand-hover"
        >
          Tule liikmeks
        </Link>
      </div>
    </section>
  );
}
