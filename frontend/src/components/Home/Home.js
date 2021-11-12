import { MovieCard } from "../Movie/MovieCard";
import "./Home.css";

export const Home = () => {
  return (
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
  );
};