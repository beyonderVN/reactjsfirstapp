import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List.jsx';
import {Provider} from 'react-redux';
// import store from '../Manager.jsx';

class Home extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <List/>
        );
  }
}

module.exports = Home;
