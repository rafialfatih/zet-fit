import Image from "next/image";

export default function OurTeam() {
  return (
    <div className="mt-6 sm:mt-0">
      <h1 className="text-4xl font-semibold text-center">Our Team</h1>
      <div className="flex flex-col space-y-8 items-center mt-4">
        <div className="w-72 h-full border border-slate-300 rounded-md p-4 flex flex-col items-center">
          <div className="rounded-full w-52 h-52 relative overflow-hidden">
            <Image
              optimized="1"
              src="/img/feliq-profile.jpeg"
              alt="Feliq"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="mt-8 text-center space-y-2">
            <h1 className="font-semibold text-xl">Al Feliq Akbar</h1>
            <p>STMIK Indo Daya Suvana</p>
          </div>
          <div className="flex space-x-6 py-8">
            <a href="" className="w-8 h-8 relative">
              <Image
                optimized="1"
                src="/img/instagram-dark.png"
                alt="Instagram"
                layout="fill"
                objectFit="contain"
              />
            </a>
            <a href="" className="w-8 h-8 relative">
              <Image
                optimized="1"
                src="/img/github-dark.png"
                alt="Github"
                layout="fill"
                objectFit="contain"
              />
            </a>
            <a href="" className="w-8 h-8 relative">
              <Image
                optimized="1"
                src="/img/linkedin-dark.png"
                alt="LinkedIn"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
        </div>
        <div className="w-72 h-full border border-slate-300 rounded-md p-4 flex flex-col items-center">
          <div className="rounded-full w-52 h-52 relative overflow-hidden">
            <Image
              optimized="1"
              src="/img/alan-profile.jpeg"
              alt="Alan"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="mt-8 text-center space-y-2">
            <h1 className="font-semibold text-xl">Mochammad Maulana</h1>
            <p>Universitas Jember</p>
          </div>
          <div className="flex space-x-6 py-8">
            <a href="" className="w-8 h-8 relative">
              <Image
                optimized="1"
                src="/img/instagram-dark.png"
                alt="Instagram"
                layout="fill"
                objectFit="contain"
              />
            </a>
            <a href="" className="w-8 h-8 relative">
              <Image
                optimized="1"
                src="/img/github-dark.png"
                alt="Github"
                layout="fill"
                objectFit="contain"
              />
            </a>
            <a href="" className="w-8 h-8 relative">
              <Image
                optimized="1"
                src="/img/linkedin-dark.png"
                alt="LinkedIn"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
