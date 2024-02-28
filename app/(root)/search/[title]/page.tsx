import LoadMore from "@/components/shared/LoadMore";
import MovieCard from "@/components/shared/MovieCard";
import { fetchSearchedMovie } from "@/lib/actions/action";
import { validateAndFilterMovies } from "@/lib/utils";
import { notFound } from "next/navigation";

type SearchPageProps = {
  params: { title: string };
};

async function SearchPage({ params }: SearchPageProps) {
  const title = decodeURIComponent(params.title);
  const query = "query=" + title;
  const data = await fetchSearchedMovie("/search/movie?" + query);
  if (!data) return notFound();
  const movies = validateAndFilterMovies(data);
  return (
    <section className="wrapper flex flex-col gap-10">
      <h1 className="text-xl font-bold">Search Results for {title}</h1>
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
          serverAction={fetchSearchedMovie}
          path={"/search/movie"}
          searchQuery={query}
          totalPages={data.total_pages}
        />
      </div>
    </section>
  );
}

export default SearchPage;
