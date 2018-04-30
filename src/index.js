import React from 'react';
import ReactDOM from 'react-dom';
import {Router, HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {browserHistory} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

import RequireAuth from './views/Pages/Auth/Authentication'
import RequireAuthAdmin from './views/Pages/Auth/AuthenticationAdmin'
import jwtDecode from 'jwt-decode';


const store = createStore(
  reducers,
  applyMiddleware(thunk)
  )



const token = localStorage.getItem('token');
    if (token) {
        const decodeToken = jwtDecode(token)
            store.dispatch({
                type: 'AUTH_USER',
                payload: decodeToken
            })
        }  else {
          <Redirect push to={{  pathname: "/login"}}
          />
          
          
        }
      

ReactDOM.render((
  <Provider store={store}>
  <HashRouter >
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>
      <Route path="/" name="Home" component={RequireAuth(RequireAuthAdmin(Full))}/>
      <Route name="Page 404" component={Page404}/>
    </Switch>
    </HashRouter>
  </Provider>
  
), document.getElementById('root'));
