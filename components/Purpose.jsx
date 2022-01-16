import Image from "next/image";

export default function Purpose() {
  const purpose = [
    {
      title: "Free to use",
    },
    {
      title: "Easy to understand",
    },
    {
      title: "Fast and save memory",
    },
    {
      title: "Supports various devices",
    },
    {
      title: "Care about your health",
    },
  ];

  return (
    <div className="h-full mx-6 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
        Purpose
      </h1>
      <div className="block md:flex my-4 md:space-x-4">
        <div className="w-full h-48 md:w-96 sm:h-64 relative">
          <Image
            src="/img/hero.jpg"
            alt="Hero"
            layout="fill"
            className="object-cover object-center"
          />
        </div>
        <p className="text-justify text-xl mt-4 md:mt-0 md:w-1/2">
          This website was created to help everyone live healthier and exercise
          with tools that are easy to find and easy to use. Thereby
          strengthening the immune system and preventing various diseases.
        </p>
      </div>
      <div className="mt-14">
        <h1 className="text-3xl font-semibold text-center md:text-left md:text-4xl">
          The advantages of this website
        </h1>
        <ul className="mt-10 md:mt-6 space-y-3 text-xl">
          {purpose.map((item, index) => (
            <li
              key={index}
              className="border-b border-slate-400 pb-4 flex items-center space-x-2 last:border-none"
            >
              <Image
                src="/img/check-mark.png"
                alt="Check"
                width={24}
                height={24}
              />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
