import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List.jsx';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

class Home extends React.Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch({
        type: 'FETCH_NOTE_LIST'
        })
    }
    render(){
        return (
            <List mang={this.props.mang} isAdding = {this.props.isAdding} addNoteDiv={()=>{
                $("#div-add").remove("top", "20px");
                const {dispatch} = this.props;
                dispatch({type: 'TOGGLE'});
            }} />
        );
    }
}

function mapStateToProps(state) {
  const mang = state.list
  const isAdding = state.isAdding
  return {
    mang,
    isAdding
  }
}
module.exports = connect(mapStateToProps)(Home);
