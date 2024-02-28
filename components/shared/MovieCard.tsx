"use client";
import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  id: number;
  title: string;
  backdropPath: string;
};

function MovieCard({ id, title, backdropPath }: MovieCardProps) {
  return (
    <Link href={`/details/${id}`} className="">
      <div className="min-h-28 aspect-video relative group">
        <Image
          src={`https://image.tmdb.org/t/p/w780${backdropPath}`}
          fill={true}
          alt={title}
          className={`rounded-md opacity-0 transition-opacity duration-300`}
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw,(max-width: 1024) 33vw, 25vw"
          onLoad={(event) => event.currentTarget.classList.remove("opacity-0")}
        />
        <div className="absolute w-full opacity-100  group-hover:opacity-100 flex h-10 md:h-12 items-end bottom-0 bg-gradient-to-b from-transparent to-60% to-black rounded-b-md transition-opacity">
          <p className="text-white md:text-xl w-full md:pb-2 truncate pl-2 md:pl-4">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
