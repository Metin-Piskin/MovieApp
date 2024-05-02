import React from "react";
import Movies from "@/components/Movies";

const page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  return (
    <div>
      {data?.results ? (
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {data?.results?.map((e, index) => (
            <Movies data={e} key={index} />
          ))}
        </div>
      ) : (
        <div>Aranılan şey bulunamadı</div>
      )}
    </div>
  );
};

export default page;
