import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './box.css';
import blank from './blank.jpg';

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

  ReactDOM.render(
    <div>
      <Header />
      <Content />
      <MovieImg />
      <Footer />
    </div>,

    document.getElementById('root')
  );