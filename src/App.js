import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchedMovies from "./components/SearchedMovies";
import React, { useContext } from "react";
import { MovieContext } from "./contexts/MovieContext";
import SearchError from "./components/SearchError";

function App() {
  const { searchError } = useContext(MovieContext);
  return (
    <>
      <SearchBar />
      {searchError && <SearchError />}
      <SearchedMovies />
    </>
  );
}

export default App;
