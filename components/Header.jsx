import Head from "next/head";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const links = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/workout",
      title: "Workout Plan",
    },
    {
      url: "/about",
      title: "About",
    },
  ];

  return (
    <>
      <Head>
        <title>EZ-Fit</title>
      </Head>
      <div className="h-full bg-slate-100">
        <nav className="h-20 flex justify-between mx-16">
          <div className="md:hidden"></div>
          <div className="flex items-center justify-center">
            <Link href="/">
              <a className="text-4xl">EZ-Fit</a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                <a className="text-lg text-zinc-500 hover:text-zinc-700 font-semibold transition duration-300">
                  {link.title}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </nav>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="absolute flex flex-col bg-slate-100 w-full h-screen z-50">
            {links.map((link, index) => (
              <div
                key={index}
                className="py-8 border-b border-slate-400 w-3/4 mx-auto flex justify-center"
              >
                <Link href={link.url}>
                  <a
                    onClick={() => setOpen(!isOpen)}
                    className="text-lg text-zinc-500 hover:text-zinc-700 font-semibold transition duration-300"
                  >
                    {link.title}
                  </a>
                </Link>
              </div>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
