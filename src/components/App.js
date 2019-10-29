import React from 'react';
import '../App.css';
import {connect} from 'react-redux'

import Nav from './Nav'
import NoteList from './NoteList'
import NoteFrom from './NoteFrom';

class App extends React.Component {

  showForm = () => {
    if(this.props.isEdit) {
      return <NoteFrom ></NoteFrom>
    }
  }
  render(){

  return (
    <div className="App">
      <Nav></Nav>
      <div className="container">
        <div className="row">
          <NoteList></NoteList>
          {this.showForm()}
        </div>
      </div>  
    </div>
  );
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type:'CHANGE_EDIT_STATUS'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

