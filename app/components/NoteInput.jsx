import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class InputDiv extends React.Component{
  constructor(props){
    super(props);
  }

  send(){
    const that = this;
    $.post("/add",{note: this.refs.txt.value}, function(data){
        const {dispatch} = that.props;
        dispatch({type: 'ADD',list:data});
        dispatch({type: 'TOGGLE'});
        that.refs.txt.value = '';
        const scroller    = $('#list');
        const height = scroller[0].scrollHeight;
        scroller.animate({
          scrollTop: height
        });
    });
  }

  render(){
    return (
      <div className="w3-margin ">
        <input className="w3-input" type="text" ref = "txt" placeholder="EnteryourNote!"/>
        <br/>
        <button className="w3-button w3-border" onClick={this.send.bind(this)}>SEND</button>
      </div>
    );
  }
};

module.exports = connect()(InputDiv);