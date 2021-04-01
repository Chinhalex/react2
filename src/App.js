import './App.css';
import React, { Component } from 'react';
import Menu from './conponent/Menu.js';
import Header from './conponent/Header.js';
import Detail from './conponent/Detail.js';
import Footer from './conponent/Footer.js';
import Detail2 from './conponent/Detail2.js';
import News from './conponent/News.js';
import Contact from './conponent/Contact.js';
import RouterUrl from './router/RouterUrl.js';
import Chitiet from './conponent/Chitiet';


import {
  BrowserRouter as Router,
  Switch,
   Route,
   Link
 } from "react-router-dom";


class App extends Component {
  render() {
    return (

           <Router>
                  <Menu/>
                  <Header/>
                    <RouterUrl/>
                  <Footer/>
           </Router>
                 
           
            
    );
  }
}

export default App;