import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

const page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  return (
    <div className="relative  min-h-screen">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
        fill
        className="object-cover"
      />
      <div className="w-1/3 p-7 absolute bg-gradient-to-br from-black via-transparent to-transparent dark:text-white text-white">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className=" text-sm">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className="my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default page;
