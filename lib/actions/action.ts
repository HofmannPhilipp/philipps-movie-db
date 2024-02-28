"use server";

import {
  fetchMoviesSchema,
  genresSchema,
  movieDetailSchema,
  trailerSchema,
} from "../validations";

const options = {
  method: "GET",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  },
};

const BASE_URL = "https://api.themoviedb.org/3" as const;

export async function fetchMovies(path: string) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      ...options,
      method: options.method || "GET",
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data: unknown = await response.json();
    const validated = fetchMoviesSchema.parse(data);
    return validated;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(id: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?append_to_response=credits`,
      {
        ...options,
        method: options.method || "GET",
        headers: {
          ...options.headers,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    const validated = movieDetailSchema.parse(data);

    return validated;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieTrailers(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos`, {
      ...options,
      method: options.method || "GET",
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    const validated = trailerSchema.parse(data);
    return validated.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchGenres() {
  try {
    const response = await fetch(`${BASE_URL}/genre/movie/list`, {
      ...options,
      method: options.method || "GET",
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    const validated = genresSchema.parse(data);
    return validated.genres;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSearchedMovie(path: string) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      ...options,
      method: options.method || "GET",
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data: unknown = await response.json();
    const validated = fetchMoviesSchema.parse(data);

    return validated;
  } catch (error) {
    console.error(error);
  }
}
