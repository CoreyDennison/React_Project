import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './box.css';
import blank from './blank.jpg';

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
  render() {
    return (
      <div className = 'content'>
        <input type='text' name='search' />
        <button>Search</button>
      </div>
    )
  }
}
/* */
class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: [
        "Go to the store",
        "Wash the dishes",
        "Learn some code"
      ]
    }
  }
}

class MovieImg extends React.Component {
  render() {
    return (
      <div className="movieimg">
        <img src={blank} alt='Blank'  />
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
    <MovieImg />
    <Footer />
  </div>,

  document.getElementById('root')
);