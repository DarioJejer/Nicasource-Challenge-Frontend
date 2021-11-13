import { MovieCard } from "../Movie/MovieCard";
import "./Home.css";
import { NavBar } from "./NavBar";

export const Home = () => {
  return (
    <>
      <NavBar/>
      <div className="movies-grid">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </>
  );
};