import React from 'react';
import ReactDOM from 'react-dom';
import List from 'List';
import {Provider} from 'react-redux';
import store from 'store';

class Home extends React.Component{
    render(){
        return (
        <Provider store={store}>
            <List/>
        </Provider>
        );
  }
}

module.exports = Home;
