import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FetchMovies } from "@/types";
import { movieSchema } from "./validations";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateAndFilterMovies(data: FetchMovies) {
  const validatedAndFilterd = data.results.filter((item) => {
    const result = movieSchema.safeParse(item);
    if (result.success && result.data.vote_count >= 300) return true;
    return false;
  });
  return validatedAndFilterd;
}
