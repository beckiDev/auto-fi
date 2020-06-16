import React from 'react';
import Header from './components/Header.js';
import Posts from './conteiners/Posts.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <p className="note">
        Expand comments click on <i className="fa fa-comments"> </i>
        <br />
        Add new Comment click on <i className="fa fa-plus"></i>
      </p>
      <Posts />
    </div>
  );
}

export default App;
