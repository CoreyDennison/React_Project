import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './box.css';
import MovieListing from './MovieListing.js'
import axios from 'axios'

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
  constructor(props){
    super(props)

    this.state = {}

    //console.log("init")

    /*var movies = [
      {id:0, poster_src: "http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg" , title: "Blade", year: 2002, rate: 6.3}
    ]

    this.state = {films: <ul>
      <li>Title</li>
      <li>Year</li>
      <li>Rating</li>
    </ul>
    }

    var movieListings = []

    movies.forEach((movie) => {
      console.log(movie.title)
      var movieListing = <MovieListing movie={movie}/>
      movieListings.push(movieListing)
    })
    this.state = {films: movieListings}*/

    this.doSearch()
    console.log("Do Search")
  }

  doSearch(){
    const tmdb_url = "https://api.themoviedb.org/3/search/movie?api_key=ec4d5ba75bc6742169af2ca01826ade6&language=en-US&query=blade runner"
    axios.get(tmdb_url).then(res => {
    //shows top 10 results
    const movieResults = res.data.results.slice(0,2)

    console.log(movieResults)

    var movieListings = []
    //50 minutes into video
    movieResults.forEach((movie) => {
      var movieYear = movie.release_date.slice(0,4)
      movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path

      console.log(movie.poster_src,movie.title, movieYear, movie.vote_average)
      var movieListing = <MovieListing movie={movie} />
      movieListings.push(movieListing)
    })
    this.setState({films: movieListings})
  })

  }
  

  render() {
    return (
      <div className = 'content'>
        <input type='text' name='search' />
        <button >Search</button>

        {this.state.films}

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