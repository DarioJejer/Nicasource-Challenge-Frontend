import { Landing } from "../Landing/Landing";
import { Login } from "../Landing/Login";
import { MovieCard } from "../Movie/MovieCard";
import "./Home.css";
import { NavBar } from "./NavBar";

export const Home = () => {
  return (
    <>
      <Landing/>
      {/* <NavBar/>
      <div className="movies-grid">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div> */}
    </>
  );
};