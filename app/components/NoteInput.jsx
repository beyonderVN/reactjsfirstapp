import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class InputDiv extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      text : ''
    }
    this.dispatch = props.dispatch
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    const {dispatch} = this
    let {value} = this.input
    this.input.value = ''
    // giu page khong reload khi submit
    event.preventDefault()

    $.post('/api/add',{note: value}, function(data){
        
        dispatch({type: 'ADD',list:data})
        dispatch({type: 'TOGGLE'})
        const scroller = $('#list')
        const height = scroller[0].scrollHeight
        scroller.animate({
          scrollTop: height
        })
        
    })
    this.setState({text: ''})
    
  }

  render(){
    return (
  
      <form className="w3-margin " onSubmit={this.handleSubmit} >
        <input 
          className="w3-input" 
          type="text" 
          ref = {(input) => this.input = input} 
          value={this.state.value} 
          placeholder="EnteryourNote!"          
        />
        <br/>
        <input className="w3-button w3-border"  type="submit" value="SEND" ></input>
      </form>
    );
  }
};

module.exports = connect()(InputDiv);