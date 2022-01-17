import { useState } from "react";

export default function WorkoutResult() {
  return (
    <div className="w-full h-[36em] border-2 px-6 py-2 rounded-md bg-neutral-100 shadow-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <h1 className="text-center text-3xl font-semibold my-4">
        Your Workout Plan
      </h1>
      <div className="h-full flex items-center justify-center">
        <h1 className="text-xl transform -translate-y-24 font-semibold">
          You don&lsquo;t have a workout plan yet...
        </h1>
      </div>
    </div>
  );
}
