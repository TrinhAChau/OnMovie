import { useState, createContext } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
    const [currentMovie, setCurrentMovie] = useState();
    const handleMovie = (movie) => {
        setCurrentMovie(movie);
    }
    const value = {
        currentMovie,
        handleMovie,
    }
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}

export {MovieContext, MovieProvider};
