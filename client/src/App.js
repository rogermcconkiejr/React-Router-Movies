import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Router>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => <MovieList {...props} movies={MovieList} />} />
      <Route path="/movies/:id" render={props => <Movie {...props} movie={Movie} />} />
      </Router>  

      

    </div>
  );
};

export default App;
