import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <h2 className="text-7xl text-center font-bold">Movie Hunter</h2>
      <h3 className="text-4xl my-20 text-center">
        Some Of Our Best Movies {movies.length}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14 mx-auto md:w-10/12 gap-10">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.show.id}
              index={index}
              movie={movie}
            ></MovieCard>
          ))}
        </div>
      </h3>
    </>
  );
}

export default App;
