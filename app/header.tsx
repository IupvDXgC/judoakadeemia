export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-brand/20 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="/#home" className="text-lg font-bold tracking-tight text-brand">
          Judoakadeemia
        </a>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="/#about" className="text-zinc-600 hover:text-brand">
              Meist
            </a>
          </li>
          <li>
            <a href="/join-us" className="text-zinc-600 hover:text-brand">
              Liikmetaotlus
            </a>
          </li>
          <li>
            <a href="/#contact" className="text-zinc-600 hover:text-brand">
              Meie tiim
            </a>
          </li>
          <li>
            <a href="/groups" className="text-zinc-600 hover:text-brand">
              Treeningrühmad
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
