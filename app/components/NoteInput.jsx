var React = require('react');
var ReactDOM = require('react-dom');
var {connect} = require('react-redux');
var InputDiv = React.createClass({
  send(){
    var that = this;
    $.post("/add",{note: this.refs.txt.value}, function(data){
        var {dispatch} = that.props;
        dispatch({type: 'ADD',list:data});
        dispatch({type: 'TOGGLE'});
        that.refs.txt.value = '';
        var scroller    = $('#list');
        var height = scroller[0].scrollHeight;
        scroller.animate({
          scrollTop: height
        });
    });
  },
  render: function(){
    return (
      <div className="w3-margin ">
        <input className="w3-input" type="text" ref = "txt" placeholder="EnteryourNote!"/>
        <br/>
        <button className="w3-button w3-border" onClick={this.send}>SEND</button>
      </div>
    );
  }
});

module.exports = connect()(InputDiv);