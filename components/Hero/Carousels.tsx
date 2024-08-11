import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroNavbar from "./HeroNavbar";
import HeroFooder from "./HeroFooder";

const carouselsdata = [
  {
    id: "slide-1",
    image: "/image1.jpg",
  },
  {
    id: "slide-2",
    image: "/image2.jpg",
  },
  {
    id: "slide-3",
    image: "/image3.jpg",
  },
  {
    id: "slide-4",
    image: "/image4.jpg",
  },
  {
    id: "slide-5",
    image: "/image5.jpg",
  },
];

const Carousels = () => {
  return (
    <div>
      <div className="text-center md:w-[96vw] w-full relative  overflow-hidden">
        <div className="slides ">
          {carouselsdata.map((item) => (
            <div id={item.id} key={item.id} className="w-[96vw] lg:h-[80vh]  ">
              <Image
                alt={item.id}
                src={item.image}
                width={1800}
                height={1800}
                className="w-full select-none max-h-full bg-center object-cover"
              />
            </div>
          ))}
        </div>
        <HeroNavbar />
        <HeroFooder />
      </div>
      <div className="items-center gap-1 mb-1 flex justify-center w-full">
        <Link
          href="#slide-1"
          className="bg-slate-900 rounded-full text-[8px] px-1 lg:px-3 lg:py-2   text-slate-50 font-bold"
        >
          1
        </Link>
        <Link
          href="#slide-2"
          className="bg-slate-900 rounded-full text-[8px] px-1 lg:px-3 lg:py-2   text-slate-50 font-bold"
        >
          2
        </Link>
        <Link
          href="#slide-3"
          className="bg-slate-900 rounded-full text-[8px] px-1 lg:px-3 lg:py-2   text-slate-50 font-bold"
        >
          3
        </Link>
        <Link
          href="#slide-4"
          className="bg-slate-900 rounded-full text-[8px] px-1 lg:px-3 lg:py-2   text-slate-50 font-bold"
        >
          4
        </Link>
        <Link
          href="#slide-5"
          className="bg-slate-900 rounded-full text-[8px] px-1 lg:px-3 lg:py-2   text-slate-50 font-bold"
        >
          5
        </Link>
      </div>
    </div>
  );
};

export default Carousels;
