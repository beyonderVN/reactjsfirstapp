var React = require('react');
var ReactDOM = require('react-dom');
var InputDiv = React.createClass({
  send(){
    var that = this;
    $.post("/add",{note: this.refs.txt.value}, function(data){
        console.log(data);
        that.props.setList({mang: data});
        
        ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
    });
  },
  render: function(){
    return (
      <div>
        <input type="text" ref = "txt" placeHolder="EnteryourNote!"/>
        <button onClick={this.send}>SEND</button>
      </div>
    );
  }
});

module.exports = InputDiv;