var React = require('react');
var ReactDOM = require('react-dom');
var Note = require('./Note.jsx');
var InputDiv = require('./NoteInput.jsx');

var list;
var NoteList = React.createClass({
  getInitialState(){
    list = this;
    return {mang:[]};
  },
  addNoteDiv(){
    ReactDOM.render(
      <InputDiv setList={this.setList}/>,
      document.getElementById('div-add')
    );
  }, 
  setList(data){
    this.setState({mang:data});
  },
  setEvent(event){
    switch (event.action) {
      case 'update':
        this.setList(event.mang);

      case 'delete':
        this.setList(event.mang);

      default:

    }
  },
  render: function(){
    return (
      <div>
        <div className="header animation">
          <button className="w3-margin w3-button w3-border " onClick={this.addNoteDiv}>ADDNOTE</button>
          <div id="div-add" className="animation">
          </div>
        </div>
        
        <div className="list w3-border-top w3-border-bottom ">
        {
          this.state.mang.map(function(note, index){
            return <Note setEvent={list.setEvent}  key={index} id={index}>{note}</Note>
          })
        }
        </div>
        
      </div>
    );
  },
  componentDidMount(){
    var list = this;
    $.post("./getNotes",function(data){
      list.setState({mang: data});
    });
  }
});

module.exports = NoteList;