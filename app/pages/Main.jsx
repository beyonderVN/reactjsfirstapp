import React from 'react';
import Nav from '../pages/Nav.jsx'

class Main extends React.Component{
    render(){
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        ) 
    }
}

module.exports = Main;