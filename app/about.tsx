export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-brand/20 bg-brand/5">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-brand">Meist</h2>
        <p className="mb-4 text-zinc-600">
          Judoakadeemia on Eesti juhtiv judoklubi, mis pakub kvaliteetset judotreeningut
          lastele, noortele ja täiskasvanutele. Meie treenerid on pühendunud iga sportlase
          arendamisele nii võistlusjudo kui ka isikliku kasvu osas.
        </p>
        <p className="mb-4 text-zinc-600">
          Judo põhimõtted — maksimaalne efektiivsus minimaalse pingutusega, vastastikune
          kasu ja harmoonia — on meie klubi vundamendiks. Treeningud toimuvad mitmes
          vanusegrupis ja tasemel.
        </p>
        <ul className="list-inside list-disc space-y-2 text-zinc-600">
          <li>Treeningud algajatele ja edasijõudnutele</li>
          <li>Kogenud ja sertifitseeritud treenerid</li>
          <li>Sõbralik ja toetav õhkkond</li>
        </ul>
      </div>
    </section>
  );
}
