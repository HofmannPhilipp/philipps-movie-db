import z from "zod";
const crewMemberSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  credit_id: z.string(),
  department: z.string(),
  job: z.string(),
});

const actorSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  cast_id: z.number(),
  character: z.string(),
  credit_id: z.string(),
  order: z.number(),
});

const creditsSchema = z.object({
  id: z.number().optional(),
  cast: z.array(actorSchema),
  crew: z.array(crewMemberSchema),
});

const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const genresSchema = z.object({
  genres: z.array(genreSchema),
});
const productionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

const productionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

const spokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

export const movieDetailSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  belongs_to_collection: z
    .object({
      id: z.number(),
      name: z.string(),
      poster_path: z.string().nullable(),
      backdrop_path: z.string(),
      logo_path: z.string().optional(),
      origin_country: z.string().optional(),
    })
    .nullable(),
  budget: z.number(),
  genres: z.array(genreSchema),
  homepage: z.string(),
  id: z.number(),
  imdb_id: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  production_companies: z.array(productionCompanySchema),
  production_countries: z.array(productionCountrySchema),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(spokenLanguageSchema),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
  credits: creditsSchema,
});

export const movieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string().default("en"),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
  title: z.string(),
  release_date: z.string(),
  original_title: z.string(),
});

export const fetchMoviesSchema = z.object({
  page: z.number(),
  results: z.array(movieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const trailerSchema = z.object({
  id: z.number(),
  results: z.array(
    z.object({
      iso_639_1: z.string(),
      iso_3166_1: z.string(),
      name: z.string(),
      key: z.string(),
      site: z.string(),
      size: z.number(),
      type: z.string(),
      official: z.boolean(),
      published_at: z.string(),
      id: z.string(),
    })
  ),
});
