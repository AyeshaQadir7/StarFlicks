"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Loader from "@/components/Loader/Loading";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (movieName: string) => {
    setLoading(true);
    setSearchTerm(movieName);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        {/* Navbar */}
        <Navbar onSearch={handleSearch} />

        {/* Show loader when searching */}
        {loading ? <Loader /> : <Hero />}
      </div>

      {/* Movie Details */}
      {searchTerm && !loading && <MovieDetails searchTerm={searchTerm} />}
    </div>
  );
};

export default HomePage;
