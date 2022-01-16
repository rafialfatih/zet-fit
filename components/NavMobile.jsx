import Link from "next/link";

export default function NavMobile({ setNavOpen, isNavOpen, menus }) {
  return (
    <nav className="absolute flex flex-col bg-slate-100 w-full h-screen z-50">
      {menus.map((menu, index) => (
        <div
          key={index}
          className="py-8 border-b border-slate-400 w-3/4 mx-auto flex justify-center"
        >
          <Link href={menu.url}>
            <a
              onClick={() => setNavOpen(!isNavOpen)}
              className="text-lg text-zinc-500 hover:text-zinc-700 font-semibold transition duration-300"
            >
              {menu.title}
            </a>
          </Link>
        </div>
      ))}
    </nav>
  );
}
