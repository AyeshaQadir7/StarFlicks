"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Flag, Star, VenetianMask } from "lucide-react";

interface MovieDetailsProps {
  searchTerm: string | null;
}

interface MovieData {
  Title: string;
  Genre: string;
  Released: string;
  Runtime: string;
  Actors: string;
  Country: string;
  Plot: string;
  imdbRating: string;
  Poster: string;
  Response: string; // API returns "False" if the movie is not found
  Error?: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ searchTerm }) => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchMovieData = async () => {
      setLoading(true);
      setError(null);
      setMovieData(null);

      const myAPIKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
      if (!myAPIKey) {
        setError("API key is missing!");
        setLoading(false);
        return;
      }

      const url = `https://www.omdbapi.com/?apikey=${myAPIKey}&t=${searchTerm}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: MovieData = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error || "Movie not found!");
        }

        setMovieData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [searchTerm]);

  return (
    <div className="p-4 bg-black bg-opacity-50 text-white max-w-screen-lg md:mx-auto mx-5 relative z-20 my-10 border-2 border-Black12 rounded-xl md:w-3/4">
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {movieData && !error && (
        <>
          <div className="relative flex justify-center">
            {movieData.Poster && (
              <div className="relative w-80 h-90">
                <Image
                  src={movieData.Poster}
                  alt={movieData.Title}
                  width={400}
                  height={400}
                  className="rounded-md w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-md"></div>
              </div>
            )}
          </div>

          <div className="text-center mx-10 my-4">
            <h2 className="text-2xl font-semibold">{movieData.Title}</h2>
            <p className="opacity-70 md:font-light font-thin tracking-wider my-2 md:my-0">
              {movieData.Plot}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4 ">
              {movieData.Genre.split(", ").map((genre, index) => (
                <span
                  key={index}
                  className="bg-VividRed text-white px-3 py-1 rounded-md text-md font-normal items-center"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[4fr_1fr] sm:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1.5fr_1.5fr_1fr] gap-6 my-8">
            <div className="bg-Black06 p-4 border-2 border-Black12 rounded-md">
              <p>
                <span className="font-light opacity-70 flex gap-2">
                  <VenetianMask strokeWidth={1} />
                  Cast
                </span>
                <br />
                {movieData.Actors}
              </p>
            </div>
            <div className="bg-Black06 p-4 border-2 border-Black12 rounded-md">
              <p>
                <span className="font-light opacity-70 flex gap-2">
                  <Calendar strokeWidth={1} />
                  Released
                </span>
                <br />
                {movieData.Released}
              </p>
            </div>
            <div className="bg-Black06 p-4 border-2 border-Black12 rounded-md">
              <p>
                <span className="font-light opacity-70 flex gap-2">
                  <Flag strokeWidth={1} />
                  Country
                </span>
                <br />
                {movieData.Country}
              </p>
            </div>
            <div className="bg-Black06 p-4 border-2 border-Black12 rounded-md">
              <p>
                <span className="font-light opacity-70 flex gap-1">
                  <Star strokeWidth={1} />
                  Rating
                </span>
                <br />
                {movieData.imdbRating}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
