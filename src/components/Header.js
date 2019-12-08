import React, { Component } from 'react';

import { Icon } from 'react-icons-kit'
import {fourUp} from 'react-icons-kit/iconic/fourUp'
import {mail} from 'react-icons-kit/ikons/mail'
import {bullhorn} from 'react-icons-kit/iconic/bullhorn'
import '../App.css'
import logo from './favicon.ico'



class Header extends Component{

    render(){
       return(
        <div>
           <header>
               <img src={logo} className="logo" alt="logo"/>
               <label className="ico">dhis<span className="num">2</span></label>
               <label className="title">DHIS2 WEB PORTAL</label>
               <div className="notif"><Icon icon={bullhorn}/></div>
               <div className="mail"><Icon icon={mail}/></div>
               <div className="fourup"><Icon icon={fourUp} /></div>
               <input type="search" className="search" placeholder="Search"/>
           

            </header> 
        </div>
    
    )}
}

export default Header;