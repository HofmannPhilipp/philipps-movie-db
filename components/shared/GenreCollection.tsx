import Collection from "./Collection";
import GenreFilter from "./GenreFilter";

type GenreCollectionProps = {
  searchParams: { [key: string]: string | string[] };
};

async function GenreCollection({ searchParams }: GenreCollectionProps) {
  return (
    <>
      <GenreFilter />
      <Collection
        title={`Discover`}
        path={`/discover/movie?vote_count.gte=200&with_genres=${
          searchParams.genre || ""
        }`}
      />
    </>
  );
}

export default GenreCollection;
