import Image from "next/image";
import { GiBackwardTime } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { TbUserSquareRounded } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import React from "react";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    // This is Navbar Menu
    <div className="flex justify-between border-b ">
      <div className="flex items-center h-16 gap-2">
        <Link href={"/"}>
          <Image
            src={"/accountbiz.png"}
            width={100}
            height={100}
            className="w-8 lg:w-10"
            alt="logo"
          />
        </Link>
        <div className="">
          <Link href={"/"} className="text-lg lg:text-xl font-mono">
            AccoutBiz
          </Link>
          <div className="">
            <div className="md:flex flex-row gap-2 hidden  text-sm">
              <Link
                href={"/ledger"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px] "
              >
                Ledger
              </Link>
              <Link
                href={"/invoices"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px]"
              >
                Invoices
              </Link>
              <Link
                href={"/products"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px]"
              >
                Products
              </Link>
              <Link
                href={"/banks"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px]"
              >
                Banks
              </Link>
              <Link
                href={"/gstr"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px]"
              >
                GSTR
              </Link>
              <Link
                href={"/solutions"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px]"
              >
                Solutions
              </Link>
              <Link
                href={"/about"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px]"
              >
                About
              </Link>
              <Link
                href={"/settings"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px]"
              >
                Settings
              </Link>
              <Link
                href={"/help"}
                className="cursor-pointer ease-in-out duration-500 rounded-md hover:bg-slate-100 p-[2px]"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Link href={"/history"}>
          <GiBackwardTime className="w-7 md:w-9 h-7 md:h-9 hover:bg-slate-100 ease-in-out duration-500 rounded-full p-1" />
        </Link>
        <Link href={"/chat"}>
          <MdOutlineMessage className="w-7 md:w-9 h-8 md:h-10 hover:bg-slate-100 ease-in-out duration-500 rounded-full p-1" />
        </Link>
        <Link href={"/users"}>
          <TbUserSquareRounded className="w-7 md:w-9 h-7 md:h-9 hover:bg-slate-100 ease-in-out duration-500 rounded-full p-1" />
        </Link>
        <CiMenuKebab className="w-6 md:hidden h-6  hover:bg-slate-100 ease-in-out duration-500 rounded-full p-1" />
      </div>
    </div>
  );
};

export default NavbarMenu;
