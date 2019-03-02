import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './box.css';

class Header_Footer extends React.Component {
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
        </div>
      )
    }
  }
   
  ReactDOM.render(
    <div>
      <Header_Footer />
      <Content />
      <Header_Footer />
      </div>,
    document.getElementById('root')
  );