import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
  const teams = [
    {
      name: "Al Feliq Akbar",
      img: "/img/feliq-profile.jpeg",
      imgPlaceholder: "/img/feliq-profile-blur.jpg",
      study: "STMIK Indo Daya Suvana",
      insta: "https://www.instagram.com/unclebull.co/",
      linkedin: "https://www.linkedin.com/in/al-feliq-akbar/",
      github: "https://github.com/alfeliqakbar",
    },
    {
      name: "Mochammad Maulana",
      img: "/img/alan-profile.jpeg",
      imgPlaceholder: "/img/alan-profile-blur.jpg",
      study: "Universitas Jember",
      insta: "https://www.instagram.com/m.alan14.pdf/",
      linkedin: "/about",
      github: "https://github.com/Mochalan14",
    },
  ];

  return (
    <div className="mt-6 sm:mt-0">
      <h1 className="text-4xl font-semibold text-center">Our Team</h1>
      <div className="flex flex-col space-y-8 items-center mt-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className="w-72 h-full border border-slate-300 rounded-md p-4 flex flex-col items-center"
          >
            <div className="rounded-full w-52 h-52 relative overflow-hidden">
              <Image
                unoptimized="1"
                placeholder="blur"
                blurDataURL={team.imgPlaceholder}
                src={team.img}
                alt={team.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="mt-8 text-center space-y-2">
              <h1 className="font-semibold text-xl">{team.name}</h1>
              <p>{team.study}</p>
            </div>
            <div className="flex space-x-6 py-8">
              <Link href={team.insta}>
                <a className="w-8 h-8 relative">
                  <Image
                    unoptimized="1"
                    src="/img/instagram-dark.png"
                    alt="Instagram"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
              <Link href={team.github}>
                <a className="w-8 h-8 relative">
                  <Image
                    unoptimized="1"
                    src="/img/github-dark.png"
                    alt="Github"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
              <Link href={team.linkedin}>
                <a className="w-8 h-8 relative">
                  <Image
                    unoptimized="1"
                    src="/img/linkedin-dark.png"
                    alt="LinkedIn"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
