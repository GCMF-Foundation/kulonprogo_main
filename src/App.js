import React, { useEffect } from 'react';
import './App.css';
import Login from './view/Login'
import Forgot from './view/Forgot'
import Reset from './view/Reset'
import Error404 from './view/Error404'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

function App(props) {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  return (
      <Router >
        <Switch>
          <Route exact path="/" ><Login /></Route>
          <Route exact path="/forgot" ><Forgot /></Route>
          <Route exact path="/reset" ><Reset /></Route>
          <Route ><Error404 /></Route>
        </Switch>

      </Router>
  );
}

export default App;

