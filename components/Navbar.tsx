import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavItem {
  id: number;
  name: string;
}

const data: NavItem[] = [
  {
    id: 1,
    name: "Solutions",
  },
  {
    id: 2,
    name: "Resources",
  },
  {
    id: 3,
    name: "Docs",
  },
  {
    id: 4,
    name: "Pricing",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between h-16 overflow-hidden items-center text-slate-900 dark:text-slate-100">
      {/* logo */}
      <div className="flex items-center gap-2">
        <Image
          src={"/accountbiz.png"}
          width={100}
          height={100}
          className="w-8"
          alt="logo"
        />
        <h1 className="text-2xl lg:text-3xl text-red-500 font-mono font-bold">

        </h1>
      </div>

      {/* navbars */}
      <div className="flex flex-row gap-4  items-center">
        <input type="checkbox" id="toggle" className="hidden" />

        <label
          htmlFor="toggle"
          className="lg:hidden cursor-pointer flex flex-col gap-1 relative"
        >
          <div className="w-6 h-1 bg-slate-950 origin-left ease-in-out duration-500 top" />
          <div className="w-6 h-1 bg-slate-950 middle" />
          <div className="w-6 h-1 bg-slate-950 origin-left ease-in-out duration-500 bottom" />
        </label>
        <div className="flex-col gap-4 px-16 bg-slate-50 ease-in-out left-[100vw] w-screen  duration-500 card absolute  h-[calc(100vh-64px)] bottom-0">
          {data.map((item) => (
            <ul key={item.id} className="">
              <li>{item.name}</li>
            </ul>
          ))}
          <div className="flex gap-4">
            <Link href={"/login"}>Login</Link>
            <Link href={"/signup"}>SignUp</Link>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="hidden lg:flex gap-4">
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>SignUp</Link>
      </div>
    </div>
  );
};

export default Navbar;
