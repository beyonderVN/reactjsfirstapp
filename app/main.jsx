var React = require('react');
var ReactDOM = require('react-dom');


/*var Note = React.createClass({
  render: function(){
    return <div className="note">
      {this.props.children}
    </div>
  }
});
var NoteList = React.createClass({
  getInitialState(){
    list = this;
    return {mang:[]};
  },
  addNoteDiv(){
    ReactDOM.render(
      <InputDiv/>,
      document.getElementById('div-add')
    );
  },
  render: function(){
    return (
      <div>
        <div id="div-add">

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
var list;

var InputDiv = React.createClass({
  send(){
    list.setState({mang:list.state.mang.concat(this.refs.txt.value)}) ;
    ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
    $.post("/add",{note: this.refs.txt.value}, function(){
      list.setState({mang: data});
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
});*/

var List = require('./components/List.jsx');
var {Provider} = require('react-redux');
var store = require('./Manager.jsx')

ReactDOM.render(
  <Provider store={store}>
    <List/>
  </Provider>
 
  ,
  document.getElementById('app')
);
