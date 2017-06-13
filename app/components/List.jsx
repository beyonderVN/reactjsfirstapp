import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';
import InputDiv from './NoteInput.jsx';
import {connect} from 'react-redux';
import {getNoteList} from '../actions'


class NoteList extends React.Component{
  
  constructor(props){
    super(props);
    this.addNoteDiv = this.addNoteDiv.bind(this)
  }

  addNoteDiv(){
    $("#div-add").remove("top", "20px");
    const {dispatch} = this.props;
    this.props.addNoteDiv();
  } 

  render(){
    const {mang,isAdding} = this.props;
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
          mang.map(function(note, index){
            return <Note  key={index} id={note.id}>{note.text}</Note>
          })
        }
        </div>
        
      </div>
    );
  }

  

}
module.exports = NoteList;
