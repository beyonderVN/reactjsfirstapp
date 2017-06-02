import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        var activeStyle = {
            background:"gray",
            color:"white"
        };
        return (
            <div>
                <div className="w3-bar w3-white">
                    <NavLink className="w3-bar-item w3-button " activeStyle={activeStyle} exact to="/">Home</NavLink>
                    <NavLink className="w3-bar-item w3-button " activeStyle={activeStyle} to="/about">About</NavLink>
                    <NavLink className="w3-bar-item w3-button " activeStyle={activeStyle} to="/history">History</NavLink>
                </div>
            </div>
        ) 
    }
}

module.exports = Nav;