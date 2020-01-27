import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Search from "./Search";
import Header from "./Header";
import Movie from "./Movie";

const Movie_api_url = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";


const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
      fetch(Movie_api_url)
        .then(response => response.json())
        // .then(console.log())
        .then(jsonResponse => {
          setMovies(jsonResponse.Search);
          setLoading(false);
          // console.log(response);
        });
    }, []);
      const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
        .then(response => response.json())
        .then(jsonResponse => {
          if (jsonResponse.Response === "True") {
            setMovies(jsonResponse.Search);
            setLoading(false);
          } else {
            setErrorMessage(jsonResponse.Error);
            setLoading(false);
          }
      });
    };

    return (
    <div className="App">
     <Header text="HOOKED" />
     <Search search={search} />
     <p className="App-intro">Sharing a few of our favourite movies</p>
     <div className="movies">
       {loading && !errorMessage ? (
        <span>loading...</span>
        ) : errorMessage ? (
         <div className="errorMessage">{errorMessage}</div>
       ) : (
         movies.map((movie, index) => (
           <Movie key={`${index}-${movie.Title}`} movie={movie} />
         ))
       )}
     </div>
   </div>
 );
};

export default App;
