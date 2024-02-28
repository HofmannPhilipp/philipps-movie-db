"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { headerLinks } from "@/constants";
import { Button } from "../ui/button";
function NavItems() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col items-start md:flex-row w-full gap-5">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${isActive && `text-primary`} whitespace-nowrap`}
          >
            <Button asChild variant={"ghost"}>
              <Link href={link.route} className=" lg:text-xl">
                {link.label}
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;
