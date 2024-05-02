"use client";

import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ThemeComp from "./ThemeComp";
import MenuItem from "./MenuItem";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  const searchHandle = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <Link
        href="/"
        className="bg-amber-600 flex rounded-lg p-3 text-2xl font-bold"
      >
        Movie <p className="text-xs font-light self-end ml-1">App</p>
      </Link>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg dark:border-white border-black">
        <input
          placeholder="Arama Yapınız..."
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={searchHandle}
          value={keyword}
          className="outline-none flex-1 bg-transparent"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((e, index) => (
        <MenuItem menu={e} key={index} />
      ))}
    </div>
  );
};

export default Header;
