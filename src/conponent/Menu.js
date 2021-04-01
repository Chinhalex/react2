import React, { Component } from 'react';
import {
    BrowserRouter as Router,
     NavLink
   } from "react-router-dom";
class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/home">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto khung ">
                        
                        <li>
                            <NavLink  to="/home" >Trang Chủ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news" activeClassName="red" activeStyle={{
                                                                fontWeight: "bold",
                                                                color: "red"
                                                            }}
                                                            >Thông Tin</NavLink>
                        </li>                       
                        <li>
                            <NavLink to="/chi-tiet" activeClassName="yellow" activeStyle={{
                                                                fontWeight: "bold",
                                                                color: "yellow"
                                                            }}
                                                            >Chi Tiết</NavLink>
                        </li>                       
                        <li>
                            <NavLink to="/contact" activeClassName="red" activeStyle={{
                                                                fontWeight: "bold",
                                                                color: "green"
                                                            }}>Liên Lạc</NavLink>
                        </li>
 
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;