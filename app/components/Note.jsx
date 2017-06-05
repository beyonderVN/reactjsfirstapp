
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Note extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      onEdit : false
    }
  }

  edit(){
    this.setState({onEdit: true});
  }

  delete(){
    const that = this;
    $.post("/api/delete",{idXoa: this.props.id}, function(data){
      const {dispatch} = that.props;
      dispatch({type: 'DELETE',list:data});
    });
  }

  save(){
    const that = this;
    $.post("/api/update", {idEdit: that.props.id, text: that.refs.txt.value}, function(data){
      that.setState({onEdit: false});
      const {dispatch} = that.props;
      dispatch({type: 'UPDATE',list:data});
    })
  }

  cancel(){
    this.setState({onEdit: false});
  }

  render(){
    if(this.state.onEdit){
      return <div className="note w3-row hover_scale w3-animate-zoom" style={{marginTop: 10 + 'px'}}>
      <div  className="w3-col s12">
        <input className="w3-input" type="text" defaultValue={this.props.children} ref = "txt" style={{width: 100 + '%'}} />
        
      </div>
        <div className="w3-col s12 w3-row">
          <button className="w3-col s6 w3-button w3-hover-blue w3-text-blue 	fa fa-check" onClick={this.save.bind(this)}></button>
          <button className="w3-col s6 w3-button w3-hover-red  w3-text-red fa fa-close" onClick={this.cancel.bind(this)}></button>
        </div>
        
      </div>
    }else{
      const link = "/note/"+this.props.id 
      return <div className="note w3-row hover_scale w3-animate-zoom" style={{marginTop: 10 + 'px',position:'relative'}} >
      <div className="w3-col s12">
        <input className="w3-input" type="text" value={this.props.children} disabled style={{width: 100 + '%'}} />
        <Link className="w3-bar-item w3-button " 
          to={{
            pathname: link
            // this is the trick!
            ,state: { modal: true }
          }}
          style={{position:'absolute',top:0,right:0}} >Detail</Link>
      </div>
        
        <div className="w3-col s12 w3-row">
          <button className="w3-col s6 w3-button w3-white	fa fa-edit " onClick={this.edit.bind(this)}></button>
          <button className="w3-col s6 w3-button w3-white fa fa-trash-o" onClick={this.delete.bind(this)}></button>
        </div>
      </div>
    }

  }
}

module.exports = connect()(Note);