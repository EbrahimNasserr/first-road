"use client"
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import SideNav from "./SideNav";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
  return (
    <header className=" z-40 absolute top-0 left-0 right-0 p-6">
      <div className="container text-slate-50 mx-auto flex h-24 justify-between flex-row-reverse md:flex-row md:h-auto items-center">
        <div className=" md:hidden"></div>
        <div className="flex flex-col items-center">
          <h2 className=" font-medium text-xs">Welcome back</h2>
          <p className="font-bold  text-2xl">Username</p>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex justify-between gap-8 items-center">
            <li className="text-lg font-semibold uppercase">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg font-semibold uppercase">
              <Link href="/history">history</Link>
            </li>
            <li className="text-lg font-semibold uppercase">
              <Link href="/add-new-car">add new car</Link>
            </li>
            <li className="text-lg font-semibold uppercase">
              <Link href="/feedback">feedback</Link>
            </li>
            <li className="text-lg font-semibold uppercase">
              <Link href="/branches">branches</Link>
            </li>
          </ul>
        </nav>
        <FaBars
          onClick={() => setOpen(!open)}
          className="text-slate-50 text-3xl cursor-pointer block lg:hidden"
        />
        <SideNav open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
