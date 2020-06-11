import React from 'react';
import Header from './components/Header.js';
import Posts from './conteiners/Posts.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
    </div>
  );
}

export default App;
