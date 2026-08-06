import Header from "../header";

const groups = [
  {
    name: "ALGAJAD",
    price: "Hind kuni 75€/kuus",
    schedule: [
      "Esmaspäev 15:00 - 16:30",
      "Kolmapäev 15:00 - 16:30",
      "Reede 15:00 - 16:30",
    ],
    coaches: ["Merit Tarkus"]
  },
  {
    name: "EDASIJÕUDNUD 1",
    price: "Kuni 85€/kuus",
    schedule: [
      "Tööpäeviti kell 16:30",
    ],
    coaches: ["Vladimir Stepanjan", "Valentyn Kopylov"]
  },
  {
    name: "EDASIJÕUDNUD 2",
    price: "Kuni 85€/kuus",
    schedule: ["Tööpäeviti kell 16:30"],
    coaches: ["Artemi Larionov"]

  },
  {
    name: "ELITE ATHLETES",
    price: "100€/kuu",
    schedule: [
      "Esmaspäev 18:00",
      "Teisipäev 18:30 (Sõjakooli 3)",
      "Kolmapäev 18:00",
      "Neljapäev 18:30 (Sõjakooli 3)",
      "Reede 18:00",
    ],
    coaches: ["Vladimir Stepanjan"]
  },
  {
    name: "MINI JUDO (4-5 aastased)",
    price: "Kuni 65€/kuus",
    schedule: ["Teisipäev 18:00 - 19:00", "Neljapäev 18:00 - 19:00"],
    coaches: ["Julia Õismaa"]
  },
  {
    name: "MINI-JUDO (5-6 aastased)",
    price: "Kuni 65€/kuus",
    schedule: ["Teisipäev 18:00-19:00", "Neljapäev 18:00-19:00"],
    coaches: ["Artemi Larionov"]
  },
  {
    name: "MINI-JUDO",
    price: "Kuni 65€/kuus",
    schedule: ["Teisipäev 17:00-18:00", "Neljapäev 17:00-18:00"],
    coaches: ["Artemi Larionov"]
  },
  {
    name: "SEMI-PRO",
    price: "Kuni 75€/kuus",
    schedule: ["Esmaspäev 15:00-16:30, Teisipäev 15:00-16:30", "Kolmapäev 15:00-16:30"],
    coaches: ["Valentyn Kopylov"]
  },
];

export default function GroupsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="scroll-mt-16">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="mb-8 text-2xl font-bold tracking-tight text-brand">Treeningrühmad</h1>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] table-fixed border-collapse">
                <thead>
                  <tr className="border-y border-brand/20 text-left text-sm font-semibold uppercase tracking-wide text-brand">
                    <th className="w-1/3 py-3 pr-8">Rühm</th>
                    <th className="w-1/3 py-3 pr-8">Treener</th>
                    <th className="w-1/3 py-3 pr-8">Treeningute ajad</th>
                    <th className="w-1/3 py-3">Hind</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand/20">
                  {groups.map((group) => (
                    <tr key={group.name}>
                      <td className="py-4 pr-8 align-top text-lg font-medium text-zinc-800">
                        {group.name}
                      </td>
                      <td className="py-4 pr-8 align-top text-left text-zinc-600">
                        <ul className="space-y-1">
                          {group.coaches.map((coach: string) => (
                              <li key={coach}>{coach}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-4 pr-8 align-top text-left text-zinc-600">
                        <ul className="space-y-1">
                          {group.schedule.map((time) => (
                            <li key={time}>{time}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-4 align-top text-left text-zinc-600">{group.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
