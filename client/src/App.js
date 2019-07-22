import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
    <SavedList list={savedList} />
    <Switch>
    <Route path="/" exact component={MovieList} />
    <Route exact path= "/movies/" component ={Movie} />
    <Route path= "/movies/:id" component ={Movie} />
    </Switch>
    </div>
  );
};

export default App;
