import { WorkoutMenu, WorkoutResult } from "../../components";

export default function Workout() {
  return (
    <div className="h-full xl:h-screen w-full container mx-auto my-8">
      <div className="sm:grid grid-cols-12 gap-12">
        <div className="w-5/6 col-span-12 lg:col-span-6 mx-auto">
          <WorkoutMenu />
        </div>
        <div className="w-5/6 col-span-12 lg:col-span-6 mx-auto">
          <WorkoutResult />
        </div>
      </div>
    </div>
  );
}
