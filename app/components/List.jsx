var React = require('react');
var ReactDOM = require('react-dom');
var Note = require('./Note.jsx');
var InputDiv = require('./NoteInput.jsx');
var {connect} = require('react-redux');


var NoteList = React.createClass({

  addNoteDiv(){
    $("#div-add").remove("top", "20px");
    var {dispatch} = this.props;
    dispatch({type: 'TOGGLE'});
  }, 
  render: function(){
    const isAdding = this.props.isAdding;
    return (
      <div>
        <div className="header ">
          <button className="w3-margin w3-button w3-border " onClick={this.addNoteDiv}>ADDNOTE</button>
          {isAdding ? (
            <div id="div-add" className="div-add ">
                <InputDiv />
            </div>
          ) : (
            <div id="div-add" className="div-add hide ">
                <InputDiv />
            </div>
          )

          }
          
        </div>
        <div id="list" className="list w3-border-top w3-border-bottom ">
        {
          this.props.mang.map(function(note, index){
            return <Note  key={index} id={note.id}>{note.text}</Note>
          })
        }
        </div>
        
      </div>
    );
  },
  componentDidMount(){
    var that = this;
    $.post("./getNotes",function(data){
      var {dispatch} = that.props;
      dispatch({type: 'ADD',list:data});
    });
  }
});

module.exports = connect(function(state){
  return {mang: state.list,isAdding: state.isAdding}
})(NoteList);
