import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <header className="bg-slate-700 p-4">
      <nav className="container mx-auto flex flex-col items-center justify-between drop-shadow-2xl md:flex-row">
        <Link href="/" className="text-3xl font-bold text-white mb-2 md:mb-0">
          WIKIROCKET!
        </Link>
        <Search />
      </nav>
    </header>
  );
}
