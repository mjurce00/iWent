import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// styles for this kit
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "./assets/demo/demo.css";

// pages for this kit
import Index from './views/Index.js';
import Profile from './views/Profile.js';
import Login from './views/Login.js';
import ForgotPassword from './views/ForgotPassword.js';
import Register from './views/Register.js';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/profile" render={props => <Profile {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />   
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/forgotPassword" render={props => <ForgotPassword {...props}/>}/>
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
        </Switch>
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );
  

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
