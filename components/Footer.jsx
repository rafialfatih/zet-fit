import Image from "next/image";
import Link from "next/link";

import { getMenu } from "../services";
import { useEffect, useState } from "react";

export default function Footer() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(getMenu());
  }, []);

  return (
    <div className="bg-neutral-800 py-12 h-full text-white font-semibold overflow-x-hidden">
      <div className="flex flex-col justify-center items-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-start w-5/6 mx-auto border-b border-slate-500 pb-6">
        <div className="flex flex-col items-center w-72 justify-center space-y-2">
          <h1 className="text-xl font-semibold">Ez Fit</h1>
          <p>Jln. Kartini no.10A, Rambipuji</p>
        </div>
        <div className="flex flex-col items-center w-72 justify-center space-y-4">
          <h1 className="text-xl font-semibold">Follow Us</h1>
          <div className="flex space-x-6">
            <Link href="/" passHref>
              <a>
                <Image
                  unoptimized="1"
                  src="/img/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <Image
                  unoptimized="1"
                  src="/img/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <Image
                  unoptimized="1"
                  src="/img/youtube.png"
                  alt="Youtube"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <Image
                  unoptimized="1"
                  src="/img/twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-72 justify-center space-y-4">
          {menus.map((menu, index) => (
            <Link key={index} href={menu.url}>
              {menu.title}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center mt-8">Copyright@2021</p>
    </div>
  );
}
