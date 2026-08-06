import Image from "next/image";

const contacts = [
  {
    firstName: "Vladimir",
    lastName: "Stepanjan",
    image: "/team/vladimir-stepanjan.png",
  },
  {
    firstName: "Julia",
    lastName: "Õismaa",
    image: "/team/julia-oismaa.png",
  },
  {
    firstName: "Merit",
    lastName: "Tarkus",
    image: "/team/merit-tarkus.png",
  },
  {
    firstName: "Artemi",
    lastName: "Larionov",
    image: "/team/artemi-larionov.png",
  },
  {
    firstName: "Valentyn",
    lastName: "Kopylov",
    image: "/team/valentyn-kopylov.png",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-brand/20">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-brand">Meie tiim</h2>
        <div className="space-y-8">
          {contacts.map((person) => (
            <div key={`${person.firstName}-${person.lastName}`} className="flex items-center gap-6">
              <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-lg bg-brand/15 sm:h-48 sm:w-48">
                <Image
                  src={person.image}
                  alt={`${person.firstName} ${person.lastName}`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 192px, 160px"
                />
              </div>
              <div>
                <p className="text-lg font-medium">{person.firstName}</p>
                <p className="text-lg text-zinc-600">{person.lastName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
