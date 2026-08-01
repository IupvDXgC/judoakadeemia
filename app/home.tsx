"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/home-hero.png", alt: "Lapsed judotreeningul tatamil" },
  { src: "/home-hero-2.png", alt: "Noored judokad matil võistlusheitlekul" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="home" className="scroll-mt-16">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="relative mb-3 aspect-[3/2] w-full overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>
        <div className="mb-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            aria-label="Previous image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 text-brand hover:bg-brand/10"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            aria-label="Next image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 text-brand hover:bg-brand/10"
          >
            →
          </button>
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
