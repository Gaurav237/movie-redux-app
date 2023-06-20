import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {

  render() {
    const  movies = this.props.store.getState();

    return (
      <div className="App">
        <Navbar />
  
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
  
          <div className="list">
            { movies.map((movie, index) => {
              return (
              <MovieCard 
              movie={movie}
              key={`movie-${index}`}
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
