import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import './App.css';

import Home from './components/Layouts/Home.Component';
import Login from './components/Auth/Login.Component';
import Register from './components/Auth/Register.Component';
import Navbar from './components/Layouts/Navbar';
import ShowEvents from './components/Layouts/ShowEvents';
import PopularGroups from './components/Layouts/PopularGroups';


class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path = '/' component = {Home}/> 
           <div className="container">
           
          <Route exact path = '/register' component = {Register}/>
          <Route exact path = '/login' component = {Login}/>
          <Route exact path = '/events' component = {ShowEvents}/>
          <Route exact path = '/popular' component = {PopularGroups}/>

           </div>
        </div>
    </Router>

    
    );
  }
}

export default App;