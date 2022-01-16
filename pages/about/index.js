import { Purpose, OurTeam } from "../../components";

export default function About() {
  return (
    <div className="px-2 lg:px-8 overflow-hidden container mx-auto my-8">
      <div className="sm:grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-8">
          <Purpose />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <OurTeam />
        </div>
      </div>
    </div>
  );
}
