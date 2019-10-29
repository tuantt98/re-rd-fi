import firebase from '../firebaseConnect'

let connectData = firebase.database().ref()


var redux = require('redux')



const noteInitialState = {
    isEdit: false,
    editItem:{}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            connectData.push(action.getItem)
            // console.log('ADD data: ' + JSON.stringify(action.getItem))
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit: !state.isEdit}
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case "UPDATE":
            connectData.child(action.getItem.id).update({
                title: action.getItem.title,
                content: action.getItem.content
            })
            return {...state,editItem:{}}
        case "DELETE_DATA":
            // console.log(action.delId)
            connectData.child(action.delId).remove()
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

store.subscribe(function() {
    console.log(JSON.stringify(store.getState()))
})

export default store