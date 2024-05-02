"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");


  const tabs = [
    {
      name: "En Populer",
      url: "popular",
    },
    {
      name: "En Son",
      url: "latest",
    },
    {
      name: "Yakında Gelecek",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 my-3 bg-gray-100 dark:bg-[#1e272e] flex items-center justify-center gap-7 ">
      {tabs.map((e, index) => (
        <Link
          className={`hover:text-orange-500 cursor-pointer transition-opacity ${e.url === genre ? "underline underline-offset-8 text-orange-500":""}`}
          href={`/?genre=${e.url}`}
          key={index}
        >
          {e.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
