var React = require('react');

var Note = React.createClass({
  getInitialState(){
    return {onEdit: false}
  },
  edit(){
    this.setState({onEdit: true});
  },
  delete(){
    var that = this;
    $.post("/delete",{idXoa: this.props.id}, function(data){
      that.props.setEvent({action:'delete',mang: data});
    });
  },
  save(){
    var that = this;
    $.post("/update", {idEdit: that.props.id, text: that.refs.txt.value}, function(data){
      that.setState({onEdit: false});
      that.props.setEvent({action:'update',mang: data});
    })
  },
  cancel(){
    this.setState({onEdit: false});
  },

  render: function(){
    if(this.state.onEdit){
      return <div className="note w3-row hover_scale w3-animate-zoom" style={{marginTop: 10 + 'px'}}>
      <div  className="w3-col s12">
        <input className="w3-input" type="text" defaultValue={this.props.children} ref = "txt" style={{width: 100 + '%'}} />
      </div>
        <div className="w3-col s12 w3-row">
          <button className="w3-col s6 w3-button w3-hover-blue w3-text-blue 	fa fa-check" onClick={this.save}></button>
          <button className="w3-col s6 w3-button w3-hover-red  w3-text-red fa fa-close" onClick={this.cancel}></button>
        </div>
        
      </div>
    }else{
      return <div className="note w3-row hover_scale w3-animate-zoom" style={{marginTop: 10 + 'px'}} >
      <div className="w3-col s12">
        <input className="w3-input" type="text" value={this.props.children} disabled style={{width: 100 + '%'}} />
      </div>
        
        <div className="w3-col s12 w3-row">
          <button className="w3-col s6 w3-button w3-white	fa fa-edit " onClick={this.edit}></button>
          <button className="w3-col s6 w3-button w3-white fa fa-trash-o" onClick={this.delete}></button>
        </div>
      </div>
    }

  }
});

module.exports = Note;