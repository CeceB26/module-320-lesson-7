import { useState, useEffect } from "react";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // ✅ API Key (use your own if you have one)
  const apiKey = "98e3fb1f";

  // ✅ State to hold movie data
  const [movie, setMovie] = useState(null);

  // ✅ Function to fetch movie data from OMDB
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  // ✅ Runs once when the component loads (page refresh)
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  // ✅ Pass getMovie DOWN to Form, pass movie DOWN to MovieDisplay
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}