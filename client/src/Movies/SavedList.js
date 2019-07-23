import React from 'react';
import {Link, Route} from 'react-router-dom';
import MovieCard from './MovieCard';
import Movie from './Movie';
const SavedList = props => {
  // console.log("SavedList" , movie)
  // const id = props.match.params.id;
  console.log("Props", props.list)

  return (

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie  => (
      <Link to = {`/movies/${movie.id}`}>

      <span className="saved-movie" key = {movie.id}>{movie.title}</span>
      </Link>


    )
    )
    }
{/* <Route */}
{/*     path="/movies/:id" */}
{/*     render= {props => { */}
{/*       return (<MovieCard {...props} key={props.list.id}/>) */}
{/*     }} /> */}
{/*  */}

  <Link to = "/">
  <div className="home-button">Home</div>
  </Link>

  </div>
  )
}
export default SavedList;
