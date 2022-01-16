import Head from "next/head";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

import { NavMobile } from ".";
import { getMenu } from "../services";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(getMenu());
  }, []);

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
            {menus.map((menu, index) => (
              <Link key={index} href={menu.url}>
                <a className="text-lg text-zinc-500 hover:text-zinc-700 font-semibold transition duration-300">
                  {menu.title}
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
          <NavMobile setNavOpen={setOpen} isNavOpen={isOpen} menus={menus} />
        )}
      </div>
    </>
  );
}
