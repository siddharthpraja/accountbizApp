import React from "react";

interface Bar {
  label: string;
  value: number;
  bg: string;
}

const bars2: Bar[] = [
  { label: "Apr", value: 500, bg: "black" },
  { label: "May", value: 200, bg: "gray" },
  { label: "Jun", value: 300, bg: "darkgray" },
];
const bars: Bar[] = [
  { label: "Apr", value: 500, bg: "black" },
  { label: "May", value: 200, bg: "gray" },
  { label: "Jun", value: 300, bg: "darkgray" },
  { label: "Jul", value: 200, bg: "gray" },
  { label: "Aug", value: 100, bg: "lightgray" },
  { label: "Sep", value: 400, bg: "darkgray" },
  { label: "Oct", value: 300, bg: "gray" },
  { label: "Nov", value: 200, bg: "lightgray" },
  { label: "Dec", value: 100, bg: "lightgray" },
  { label: "Jan", value: 400, bg: "black" },
  { label: "Feb", value: 300, bg: "darkgray" },
  { label: "Mar", value: 400, bg: "black" },
];

const HeroFooder = () => {
  return (
    <div className="lg:absolute relative  px-5 py-2 flex lg:flex-row flex-col-reverse border lg:border-none gap-4 justify-between items-center bottom-0 left-0 text-start w-full">
      {/* Vertical Bar Chart */}
      <div className="flex flex-col group items-start justify-center border-black">
        {bars2.map((bar, index) => (
          <div
            key={index}
            className="p-1 flex flex-row-reverse items-center text-xs gap-2   text-center"
          >
            <div
              className={`h-4 group-hover:h-6 text-center bg-black`}
              style={{
                width: `${bar.value / 2}px`,
                background: `${bar.bg}`,
              }}
            ></div>
            <p>{bar.value}</p>
          </div>
        ))}
      </div>
      {/* Pai Chart */}
      <div className="flex group flex-row items-center gap-4 justify-start">
        <div
         className="w-24 group-hover:w-28 h-24 group-hover:h-28 rounded-full flex justify-center items-center"
          style={{
            background:
              "conic-gradient(black 0% 20%, darkgray 20% 40%, gray 40% 80%, lightgray 80% 100%)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "rgb(239,239,239)",
            }}
          />
        </div>
        <div className="text-xs">
          <div className="flex items-center gap-2">
            <p className="bg-gray-400 w-2 h-2 rounded-sm" />
            This: 20%
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-gray-600 w-2 h-2 rounded-sm" />
            This:40%
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-gray-800 w-2 h-2 rounded-sm" />
            This:80%
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-black w-2 h-2 rounded-sm" />
            This:100%
          </div>
        </div>
      </div>
      {/*Horigental Bar Diagram */}
      <div className="flex justify-center group">
        {bars.map((bar, index) => (
          <div key={index} className=" p-1 -rotate-180 text-center">
            <p className="rotate-180 text-xs">{bar.label}</p>
            <div
              className={`md:w-4 w-3 group-hover:w-4   md:group-hover:w-6 ease-in-out duration-500  text-center bg-black`}
              style={{
                height: `${bar.value / 5}px`,
                background: `${bar.bg}`,
              }}
            ></div>
            <p className="rotate-180 text-[10px]">{bar.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFooder;
