import React from "react";
import { data } from '../data'; 
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {

  componentDidMount() {
    // make an api call
    // dipatch action

    const { store } = this.props;
    
    // subscribe to store
    store.subscribe( () => {
      console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log(this.props.store.getState());
  }

  // this function will chehck if this movie is in favourite list or not
  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState().movies;

    const index = favourites.indexOf(movie); // bool
    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }

  render() {
    console.log('RENDER', this.props.store.getState());
    const { movies } = this.props.store.getState();
    const { list, favourites, showFavourites }  = movies; 

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar 
        dispatch={this.props.store.dispatch}
        />
  
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs' }`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
  
          <div className="list">
            { displayMovies.map((movie, index) => {
              return (
              <MovieCard 
              movie={movie}
              key={`movie-${index}`}
              dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
              />
              );
            }) }
          </div>
          { displayMovies.length === 0 ? <div className="no-movies">No movies to display!</div> : null }
        </div>
      </div>
    );
  }
}

export default App;
