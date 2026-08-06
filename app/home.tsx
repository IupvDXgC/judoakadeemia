import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="scroll-mt-16">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="relative mb-8 aspect-[3/2] w-full overflow-hidden rounded-lg">
          <Image
            src="/home-hero.png"
            alt="Judoakadeemia tiim"
            fill
            className="object-cover object-top"
            priority
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-brand">Judoakadeemia</h2>
        <p className="text-zinc-600">
          Tere tulemast Judoakadeemiasse — kohta, kus judo on rohkem kui sport. Siin õpid
          distsipliini, austust ja enesekindlust igas vanuses.
        </p>
        <p className="text-zinc-600">
          Meie treeningud on mõeldud nii algajatele kui ka kogenud judokatele. Liitu meiega
          ja avasta judo maailm!
        </p>
      </div>
    </section>
  );
}
