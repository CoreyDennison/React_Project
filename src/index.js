import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './box.css';
import MovieListing from './MovieListing.js'
import axios from 'axios'

class Header extends React.Component {
    render() {
      return (
        <div className = 'headerfooter'>
          <div className = "film">          
          </div>
          <h1>Movie Search</h1>
        </div>
      )
    }
  }
  
class Content extends React.Component {
  constructor(props){
    super(props)

    this.state = {films: null, searchValue: ''};

    this.doSearch()
    //Strictly binds "this" to "Content" class
    this.doSearch = this.doSearch.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  async doSearch(){
    const movieName = this.state.searchValue;
    const tmdb_url = `https://api.themoviedb.org/3/search/movie?api_key=ec4d5ba75bc6742169af2ca01826ade6&language=en-US&query=${movieName}`
    const res = await axios.get(tmdb_url);
    //shows top 10 results
    const movieResults = res.data.results.slice(0,10)

    movieResults.forEach((movie) => {
      movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path
    })

    this.setState({films: movieResults})
  
  }

  updateInput (event) {
    this.setState({searchValue: event.target.value})
    
  }

  render() {
    return (
      <div className = 'content'>
        <input type='text' name='search' value={this.state.searchValue} onChange={this.updateInput} onInput={this.updateInput}/>
        <button id="searchButton" onClick={this.doSearch} >Search</button>

        <div className='row'>
        {
          this.state.films && 
            this.state.films.map(film => <MovieListing key={film.id} movie={film} />) 
        }
        </div>

      </div>    
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className = 'headerfooter'>
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

//References: https://www.youtube.com/watch?v=bqSSLr8A8PU&t=3004s