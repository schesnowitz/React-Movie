import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const movie1 = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  imdbID: "tt2975590",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};
const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`;
// console.log(API_KEY)
const API_KEY_LINK = "http://www.omdbapi.com?apikey=3c32c917";

//
const App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchAPI = async (title) => {
    const response = await fetch(`${API_KEY_LINK}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchAPI("superman");
  }, []);
  return (
    <div className="app">
      <h1>React Movies</h1>

      <div className="search">
        <input
          placeholder="Seach Movies" 
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchAPI(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie}/> 
        ))}
          
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
