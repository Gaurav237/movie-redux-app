import React from "react";
import { data } from '../data'; 
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

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
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie); // bool
    if(index !== -1){
      return true;
    }
    return false;
  }

  render() {
    console.log('RENDER', this.props.store.getState());
    const { list, favourites }  = this.props.store.getState();  // Obj{ list: [], favourites: [] }

    return (
      <div className="App">
        <Navbar />
  
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
  
          <div className="list">
            { list.map((movie, index) => {
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
        </div>
  
      </div>
    );
  }
}

export default App;
