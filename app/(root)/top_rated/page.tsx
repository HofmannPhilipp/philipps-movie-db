import LoadMore from "@/components/shared/LoadMore";
import MovieCard from "@/components/shared/MovieCard";
import { fetchMovies } from "@/lib/actions/action";
import { validateAndFilterMovies } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

async function TopRatedPage() {
  const data = await fetchMovies("/movie/top_rated");
  if (!data) return notFound();
  const movies = validateAndFilterMovies(data);
  return (
    <section className="wrapper flex flex-col gap-10">
      <h1 className="text-xl font-bold">All Top Rated Movies</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 relative pb-36">
        {movies?.map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title || movie.original_title}
            backdropPath={movie.backdrop_path!}
            key={movie.id}
          />
        ))}
        <LoadMore
          serverAction={fetchMovies}
          path="/movie/top_rated"
          totalPages={data.total_pages}
        />
      </div>
    </section>
  );
}

export default TopRatedPage;
