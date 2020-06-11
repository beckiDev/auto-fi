import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import PostFull from './components/PostFull.js'
import store from './store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}/>
        <Route path="/post/id" component={PostFull}/>
      </Router>
     
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
