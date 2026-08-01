const contacts = [
  { firstName: "Vladimir", lastName: "Stepanjan" },
  { firstName: "Julia", lastName: "Õismaa" },
  { firstName: "Merit", lastName: "Tarkus" },
  { firstName: "Artemi", lastName: "Larionov" },
  { firstName: "Valentyn", lastName: "Kopylov" },

];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-brand/20">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-brand">Meie tiim</h2>
        <div className="space-y-8">
          {contacts.map((person) => (
            <div key={`${person.firstName}-${person.lastName}`} className="flex items-center gap-6">
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-sm text-brand/60"
                aria-hidden
              >
                Photo
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
