import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Switch,
    Route,
    useParams,
    useRouteMatch 
  } from "react-router-dom";
import Contact from '../conponent/Contact.js';
import Detail2 from '../conponent/Detail2.js';
import Detail from '../conponent/Detail.js';
import News from '../conponent/News.js';
import Header from '../conponent/Header.js';
import Chitiet from '../conponent/Chitiet.js';



class RouterUrl extends Component {
    
    render() {
        return (

                    <div>
                        <Switch>
                            <Route exact path="/home">
                                <Detail />
                                <Detail2/>
                            </Route>
                        
                        
                        
                            <Route exact path="/news">
                                <News />
                            </Route>
                         
                         
                        
                            <Route exact path="/chi-tiet/:slug.:id.html">
                                <Chitiet/>
                            </Route> 
                       
                        
                            <Route exact path="/contact">
                                <Contact />
                            </Route> 

                        </Switch>
                        
                        
                    </div>
    
        );
    }
}

export default RouterUrl;