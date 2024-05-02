"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ data }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${data?.id}`)}
      className="min-w-[430px] relative cursor-pointer"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          data?.backdrop_path || data?.poster_path
        }`}
        width={430}
        height={300}
        className="object-cover"
      />
      <div className="absolute dark:text-white text-white bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black to-transparent">
        <div className="text-2xl font-bold ">{data?.title}</div>
        <div>
          {data?.release_date} - {data?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
