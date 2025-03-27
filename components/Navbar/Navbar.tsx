"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListVideo } from "lucide-react";

interface NavbarProps {
  onSearch: (movieName: string) => void;
}

function Navbar({ onSearch }: NavbarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const movieName = searchValue.trim();
    if (movieName) {
      onSearch(movieName);
    } else {
      console.warn("Search value is empty!");
    }
  };

  return (
    <nav className="bg-transparent text-white z-20 relative ">
      <div className="navbar flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="logo flex items-center">
          <Image src="/assets/logo.png" alt="starflix" width={50} height={50} />
          <h2 className="text-lg sm:text-xl font-medium ml-2 cinzel-font">
            StarFlicks
          </h2>
        </div>

        {/* Search Bar */}
        <div className="search-container hidden md:flex items-center">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border-4 border-Black12 p-2 rounded-lg text-l"
          >
            <input
              type="text"
              placeholder="Search Movie"
              className="inputBox rounded-md bg-transparent outline-none text-sm sm:text-base w-32 sm:w-48 md:w-64 lg:w-80 transition-all duration-300 py-1 px-3 border-none bg-Black12 focus:border-none mr-4 "
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button
              type="submit"
              className="searchBtn text-sm sm:text-base py-1 px-3 border-none rounded-md bg-Black12 hover:bg-VividRed transition duration-300 ease-in-out"
            >
              Search
            </button>
          </form>
        </div>

        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger>
              <ListVideo
                strokeWidth={1}
                className="h-12 w-12 rounded-md bg-Black10 border-2 border-Black12 p-2"
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  {/* Logo */}
                  <div className="logo flex items-center justify-center my-14">
                    <Image
                      src="/assets/logo.png"
                      alt="starflix"
                      width={70}
                      height={70}
                    />
                    <h2 className="text-xl font-medium ml-2 text-white cinzel-font">
                      StarFlicks
                    </h2>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  {/* Search Bar */}
                  <div className="md:hidden flex items-center justify-center">
                    <form
                      onSubmit={handleSearchSubmit}
                      className="flex justify-around items-center border-2 border-Black12 p-1 rounded-lg text-lg"
                    >
                      <input
                        type="text"
                        placeholder="Search Movie"
                        className="inputBox rounded-md outline-none text-sm sm:text-base w-2/3 transition-all duration-300 py-1 px-3 border-none bg-Black12 focus:border-none mr-2 text-white"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="text-sm text-white py-1 px-3 border-none rounded-md bg-Black12 hover:bg-VividRed transition duration-300 ease-in-out "
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
