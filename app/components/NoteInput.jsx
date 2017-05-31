var React = require('react');
var ReactDOM = require('react-dom');
var InputDiv = React.createClass({
  send(){
    var that = this;
    $.post("/add",{note: this.refs.txt.value}, function(data){
        that.props.setEvent({action:'add',mang: data});
        $("#div-add").css("top", "-200px");
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

module.exports = InputDiv;