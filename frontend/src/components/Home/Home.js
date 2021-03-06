import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { MovieCard } from "../Movie/MovieCard"

export const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    try {
        axios.get("http://localhost:8000/movie/").then(res => res.data)
          .then(movies => {
            setMovies(movies);
          })
    } catch (error) {
        console.log(error);
    }
  }, [])

  return (
    <>
      <NavBar/>
      <div className="movies-grid">
        {movies.map(movie => {
          return (
          <MovieCard key={movie.Id} movie={movie} />)
        })}
      </div>
    </>
  );
};