import { useState } from "react";

export default function WorkoutMenu() {
  const optionMenus = [
    {
      title: "Type",
      name: "type",
      option: [
        {
          optionTitle: "Strength",
          value: "strength",
        },
        {
          optionTitle: "Cardio",
          value: "cardio",
        },
      ],
    },
    {
      title: "Target Area",
      name: "targetArea",
      option: [
        {
          optionTitle: "Full Body",
          value: "full",
        },
        {
          optionTitle: "Lower Body",
          value: "lower",
        },
        {
          optionTitle: "Upper Body",
          value: "upper",
        },
        {
          optionTitle: "Core",
          value: "core",
        },
      ],
    },
    {
      title: "Intensity",
      name: "intensity",
      option: [
        {
          optionTitle: "Beginner",
          value: "beginner",
        },
        {
          optionTitle: "Intermediate",
          value: "intermediate",
        },
        {
          optionTitle: "Advanced",
          value: "advanced",
        },
      ],
    },
  ];

  const [duration, setDuration] = useState(30);
  const [workout, setWorkout] = useState({
    type: "strength",
    targetArea: "full",
    intensity: "beginner",
  });

  const handleDuration = (e) => setDuration(e.target.value);

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-[36em] border-2 px-6 py-2 rounded-md bg-neutral-100 shadow-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <h1 className="text-center text-3xl font-semibold my-4">
        Create Your Workout
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-6 w-full flex flex-col items-center">
          <h3 className="text-center text-2xl font-semibold mb-2">Duration</h3>
          <input
            type="range"
            min="10"
            max="50"
            step="1"
            value={duration}
            onChange={handleDuration}
            className="w-72"
          />
          <span className="mt-2">
            <span className="font-semibold mr-1 text-white border rounded-full bg-blue-600 pb-1 pt-0.5 px-3">
              {duration}
            </span>{" "}
            mins
          </span>
        </div>
        {optionMenus.map((optionMenu, index) => (
          <div key={index} className="my-8 w-full flex flex-col items-center">
            <h3 className="text-center text-2xl font-semibold mb-1">
              {optionMenu.title}
            </h3>
            <div className="flex space-x-1">
              {optionMenu.option.map((subOption, index) => (
                <div
                  key={index}
                  htmlFor={subOption.value}
                  className="flex items-center space-x-2 px-2 py-1 rounded-l-md"
                >
                  <input
                    type="radio"
                    defaultChecked={
                      subOption.value === optionMenu.option[0].value
                        ? "checked"
                        : ""
                    }
                    name={optionMenu.name}
                    id={subOption.value}
                    value={subOption.value}
                    onClick={handleChange}
                    className="focus:ring-0 hover:cursor-pointer"
                  />
                  <label
                    htmlFor={subOption.value}
                    className="hover:cursor-pointer"
                  >
                    {subOption.optionTitle}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="my-4 w-full flex flex-col items-center">
          <button className="py-2 px-3 bg-blue-600 text-white rounded-md items-center hover:bg-blue-700 transition duration-300 hover:scale-105">
            Generate Workout
          </button>
        </div>
      </form>
    </div>
  );
}
