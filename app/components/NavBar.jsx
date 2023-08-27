"use client";
import Button from "./common/Button";
import Image from "next/image";
import Icons from "../../public/images/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

const navLists = [
  { id: 1, path: "/blog/daily", name: "Daily Digest" },
  { id: 2, path: "/blog/design", name: "Design Tools" },
  { id: 3, path: "/blog/tutorials", name: "Tutorials" },
];

function NavBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <main className=" bg-white sticky w-full top-0 z-40">
      <nav className="navbar">
        <Link href={"/"}>
          <Image src={Icons.Logo} alt="logo" className=" w-[100px]" />
        </Link>
        <div className="nav_menu_con">
          <ul className="nav_menu">
            {navLists.map((nav) => {
              const isActive = pathname.includes(nav.path) || false;
              return (
                <Link href={nav.path} key={nav.path}>
                  <li className={isActive ? "text-gradient" : null}>
                    {nav.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <Button className={" bg-gray-800 text-white hidden lg:block"}>
            Subscribe
          </Button>
        </div>
        <div
          className={`mobile_nav_menu_con transition-all duration-200 fixed ${
            show ? "left-0" : "left-[-100%]"
          } bottom-0`}
        >
          <ul className=" h-full flex flex-col items-center pt-[80px] gap-10">
            {navLists.map((nav) => {
              const isActive = pathname.includes(nav.path) || false;
              return (
                <Link href={nav.path} key={nav.path}>
                  <li className={isActive ? "text-gradient" : null}>
                    {nav.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <Button className={" bg-gray-800 text-white hidden lg:block"}>
            Subscribe
          </Button>
        </div>
        <button
          className=" md:hidden transition-all duration-200"
          onClick={() => setShow(!show)}
        >
          {show ? <IoMdClose size={23} /> : <HiMenuAlt3 size={23} />}
        </button>
      </nav>
    </main>
  );
}

export default NavBar;
