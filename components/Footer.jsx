import Image from "next/image";

export default function Footer() {
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
            <a href="">
              <Image
                src="/img/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="">
              <Image
                src="/img/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="">
              <Image
                src="/img/youtube.png"
                alt="Youtube"
                width={24}
                height={24}
              />
            </a>
            <a href="">
              <Image
                src="/img/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-72 justify-center space-y-4">
          <a href="">Home</a>
          <a href="">Workout Plan</a>
          <a href="">About Us</a>
        </div>
      </div>
      <p className="text-center mt-8">Copyright@2021</p>
    </div>
  );
}
