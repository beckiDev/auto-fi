import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import App from './App';
import store, { history } from './store'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConnectedRouter history={history}> 
      <Switch history={history}>
        <Route exact path="/" render={() => <App />}/>
      </Switch>   
      </ConnectedRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
