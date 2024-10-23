"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { FaHouse, FaCalendar, FaMessage, FaUser } from "react-icons/fa6";

const links = {
  user: [
    {
      title: "Home",
      href: "/home",
      icon: <FaHouse />,
    },
    {
      title: "Appointments",
      href: "/appointments",
      icon: <FaCalendar />,
    },
    {
      title: "Messages",
      href: "/messages",
      icon: <FaMessage />,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <FaUser />,
    },
  ],
};

const AppBottomNav = () => {
  const path = usePathname();
  return (
    <nav className="bg-background fixed bottom-0 left-0 w-full border-t p-4">
      <ul className="grid grid-flow-col">
        {links.user.map((item) => {
          const isActive = path == item.href;
          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={buttonVariants({
                  variant: isActive ? "secondary" : "ghost",
                  className: "",
                })}
              >
                {item.icon}
                {isActive && item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { AppBottomNav };
