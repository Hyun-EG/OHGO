"use client";

import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";

// nav icons
import iconHome from "@/public/icons/nav-icons/icon-home.svg";
import iconPromises from "@/public/icons/nav-icons/icon-promises.svg";
import iconFriends from "@/public/icons/nav-icons/icon-friends.svg";
import iconOptions from "@/public/icons/nav-icons/icon-options.svg";

const navItems = [
  { name: "home", img: iconHome, href: "/" },
  { name: "promise", img: iconPromises, href: "/promise" },
  { name: "friend", img: iconFriends, href: "/friend" },
  { name: "option", img: iconOptions, href: "/option" },
];

const Nav = () => {
  const segments = useSelectedLayoutSegments();
  const active = segments[0] ?? "home";
  return (
    <section className="w-full h-16 border-b border-custom-border-grey bg-custom-blue">
      <ul className="h-full px-8 flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = item.name === active;
          console.log(segments[0]);
          return (
            <li key={item.name}>
              <a
                href={item.href}
                className={`w-12 h-12 p-2 flex justify-center items-center ${
                  isActive ? "bg-white rounded-full" : ""
                }`}
              >
                <Image width={40} src={item.img} alt={`${item.name} 아이콘`} />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Nav;
