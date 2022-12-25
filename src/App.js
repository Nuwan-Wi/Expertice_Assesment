import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/index"
import About from './Pages/about'
import SignIn from './Pages/signin';

function App(props) {
  return (
    <div>
    <Router>
    <Navbar/>
    <Switch>
    <Route path='/' exact><Home/></Route>
    <Route path='/about'><About/></Route>
    <Route path='/sign-in'><SignIn/></Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;