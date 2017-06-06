
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Note extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      onEdit : false
    }
    this.dispatch = props.dispatch
    this.edit = this.edit.bind(this)
    this.cancel = this.cancel.bind(this)
    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
  }

  edit(){
    this.setState({onEdit: true});
  }

  delete(){
    const {dispatch} = this
    $.post('/api/delete',{idXoa: this.props.id}, function(data){
      dispatch({type: 'DELETE',list:data});
    });
  }

  save(event){
    event.preventDefault()
    const that = this
    $.post('/api/update', {idEdit: that.props.id, text: that.input.value}, function(data){
      that.setState({onEdit: false});
      that.dispatch({type: 'UPDATE',list:data});
    })
  }

  cancel(){
    this.setState({onEdit: false});
  }

  render(){
    if(this.state.onEdit){
      return <div className="note w3-row hover_scale w3-animate-zoom" style={{marginTop: 10 + 'px'}}>
      <form  className="w3-col s12" onSubmit={this.save}>
        <input  
          className="w3-input" 
          type="text" 
          defaultValue={this.props.children} 
          ref = {(input)=>{this.input = input}}
          style={{width: 100 + '%'}} 
          ref={(input) => this.input = input}
        />
        <div className="w3-col s12 w3-row">
          <button className="w3-col s6 w3-button w3-hover-blue w3-text-blue fa fa-check" type="submit"></button>
          <button className="w3-col s6 w3-button w3-hover-red  w3-text-red fa fa-close" onClick={this.cancel}></button>
        </div>
      </form>
        
        
      </div>
    }else{
      const link = "/note/"+this.props.id 
      return <div className="note w3-row hover_scale w3-animate-zoom" style={{marginTop: 10 + 'px',position:'relative'}} >
      <div className="w3-col s12">
        <input 
          className="w3-input" 
          type="text" 
          value={this.props.children} 
          disabled 
          style={{width: 100 + '%'}} 
        />
        <Link className="w3-bar-item w3-button " 
          to={{
            pathname: link
            // cho phep dung modal
            ,state: { modal: true }
          }}
          style={{position:'absolute',top:0,right:0}} >Detail</Link>
      </div>
        
        <div className="w3-col s12 w3-row">
          <button className="w3-col s6 w3-button w3-white	fa fa-edit " onClick={this.edit}></button>
          <button className="w3-col s6 w3-button w3-white fa fa-trash-o" onClick={this.delete}></button>
        </div>
      </div>
    }

  }
}

module.exports = connect()(Note);