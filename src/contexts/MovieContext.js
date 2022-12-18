import axios from "axios";
import { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState();
  const [imdbID, setImdbID] = useState();

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchInput}&apikey=17ccb0e`
    );
    setMovies((_) => {
      return response.data.Search;
    });
    setSearchError(response.data.Error);
    setIsLoading(false);
  };

  const handleReadMore = async (index) => {
    const id = movies[index].imdbID;
    setImdbID((_) => {
      return id;
    });
  };

  return (
    <MovieContext.Provider
      value={{
        searchInput,
        movies,
        handleSearch,
        handleSubmit,
        isLoading,
        searchError,
        handleReadMore,
        imdbID,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
