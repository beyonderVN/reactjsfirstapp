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
  setList(list){
      console.log(list);
    this.setState(list);
  },
  render: function(){
    return (
      <div>
        <div id="div-add" >

        </div>
        <button onClick={this.addNoteDiv}>ADDNOTE</button>
        {
          this.state.mang.map(function(note, index){
            return <Note key={index}> {note} </Note>
          })
        }
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