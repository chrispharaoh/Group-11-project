import React, { Component } from 'react';
import '../App.css'
import logo from './favicon.ico'


class Header extends Component{

    render(){
       return(
        <div>
           <header>
               <img src={logo} className="logo" alt="logo"/>
               <label className="ico">dhis2</label>
               <label className="title">DHIS2 WEB PORTAL</label>
           

            </header> 
        </div>
    
    )}
}

export default Header;