var React = require('react');
var ReactDOM = require('react-dom');
var InputDiv = React.createClass({
  send(){
    var that = this;
    $.post("/add",{note: this.refs.txt.value}, function(data){
        that.props.setList(data);
        ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
    });
  },
  render: function(){
    return (
      <div className="w3-margin w3-animate-zoom">
        <input className="w3-input" type="text" ref = "txt" placeholder="EnteryourNote!"/>
        <br/>
        <button className="w3-button w3-border" onClick={this.send}>SEND</button>
      </div>
    );
  }
});

module.exports = InputDiv;