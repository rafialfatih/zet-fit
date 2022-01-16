export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col space-x-6 space-y-6 justify-center items-center bg-fixed text-center bg-cover bg-center hero-background hover:cursor-default">
      <h1 className="text-6xl text-white font-extralight capitalize">
        Get fit with us
      </h1>
      <p className="text-white font-thin text-xl italic">
        Workout plan made easy. No-equipment training, anywhere, anytime
      </p>
      <button className="py-2 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-100">
        Get Started
      </button>
    </div>
  );
}
