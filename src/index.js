import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './box.css';
import TMDB_Logo from './TMDB_Logo.png';
import blank from './blank.jpg'

class HeaderFooter extends React.Component {
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

  class MovieImgs extends React.Component {
    render() {
      return (
        <div className = 'movieimg'> 
          <img src={blank} alt='Blank'/>
        </div>
      )
    }
  }

  ReactDOM.render(
    <div>
      <HeaderFooter />
      <Content>
        <MovieImgs />
      </Content>
      <HeaderFooter>
        <img src={TMDB_Logo} alt='Logo' />
      </HeaderFooter>
    </div>,

    document.getElementById('root')
  );