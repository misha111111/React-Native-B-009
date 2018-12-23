import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render(){
        return (
            <div id="header">
                <ul class="navigation">
                    <li><a href="food">OUR FOOD</a></li>
                    <li><a href="beer">OUR BEER</a></li>
                </ul>
                <a id="logo" href="/"><img src="images/logo2.jpg" width="276" height="203" alt="" /></a>
                <ul id="navigation">
                    <li><Link class="active" to="reservation">RESERVATION</Link></li>
                    <li><Link to="contact">CONTACT US</Link></li>
                </ul>
            </div>
        );
    }
}