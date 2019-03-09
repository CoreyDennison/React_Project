import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './box.css';

// https://api.themoviedb.org/3/search/movie?api_key=ec4d5ba75bc6742169af2ca01826ade6&language=en-US&query=${blade}&page=1&include_adult=false
// fetch(url).then(response => response.json()).then(data => setState)
// http://image.tmdb.org/t/p/w185/ prepended to all relatives url got back

class Header extends React.Component {
    render() {
      return (
        <div className = 'header'>
        </div>
      )
    }
  }
  
class Content extends React.Component {
  constructor(props) {
    super(props)

      const movies = [
        {id: 0, poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",  title: "Avengers, Infinity Wars", release: 2016, genre: "action"}
      ]

      var movieRows = [];

      movies.forEach((movie) => {
        const movieRow = <ul key={movie.id}>
                <li><img width="180" height="200" alt="poster" src={movie.poster_src} /></li>
                <li>{movie.title}</li>
                <li>{movie.release}</li>
                <li>{movie.genre}</li>
              </ul>
        movieRows.push(movieRow)
      })

      this.state = {rows: movieRows}

  }

  render() {
    return (
      <div className = 'content'>
        <input type='text' name='search' />
        <button>Search</button>

        {this.state.rows}

      </div>
         
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className = 'footer'>
        <div className = 'logo' />
      </div>
    )
  }
}

ReactDOM.render (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>,

  document.getElementById('root')
);