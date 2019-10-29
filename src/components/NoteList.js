import React, { Component } from 'react'
import firebase from '../firebaseConnect'
import NoteItem from './NoteItem'

let connectData = firebase.database().ref()


export default class NoteList extends Component {

  constructor(props) {
    super(props);
    this.state={
      dataFirebase:[]
    }
  }
  
  // dùng để convert từ database nguyên mẫu sang mảng
  componentWillMount() {
    connectData.on('value', (notes) => {
      let arrData = []
      notes.forEach( data => {
        let id = data.key
        let title = data.val().title
        let content = data.val().content
        arrData.push({id,title,content})
      } )
      this.setState({
        dataFirebase: arrData
      })
    })
  }
  getData = () => {

    if(this.state.dataFirebase){
      return this.state.dataFirebase.map( (value,key) => 
        <NoteItem
        key={key}
        id={value.id}
        title={value.title}
        content={value.content}
        note ={value}
        >
        </NoteItem>
      )
    }

  }
    render() {
        return (
            <div className="col">
            <div id="noteList" role="tablist" aria-multiselectable="true">
             { this.getData()}
            </div>  
          </div>
          
        )
    }
}
