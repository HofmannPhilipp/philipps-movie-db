import LoadMore from "@/components/shared/LoadMore";
import MovieCard from "@/components/shared/MovieCard";
import { fetchMovies } from "@/lib/actions/action";
import { validateAndFilterMovies } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function TrendingPage() {
  const data = await fetchMovies("/trending/movie/week");
  if (!data) return notFound();
  const movies = validateAndFilterMovies(data);

  return (
    <section className="wrapper flex flex-col gap-10">
      <h1 className="text-xl font-bold">All Trending Movies</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 relative pb-36">
        {movies?.map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title || movie.original_title}
            backdropPath={movie.backdrop_path!}
            key={movie.id}
          />
        ))}
        <Suspense>
          <LoadMore
            serverAction={fetchMovies}
            path="/trending/movie/week"
            totalPages={data.total_pages}
          />
        </Suspense>
      </div>
    </section>
  );
}

export default TrendingPage;
