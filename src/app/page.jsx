import React from "react";
import Movies from "@/components/Movies";

const page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {data?.results?.map((e, index) => (
        <Movies data={e} key={index} />
      ))}
    </div>
  );
};

export default page;
