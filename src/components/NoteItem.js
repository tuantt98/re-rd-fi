import React, { Component } from 'react'
import {connect} from 'react-redux'

class NoteItem extends Component {

    changeEdit = () => {
        this.props.changeEditStatus()
        this.props.getEditData(this.props.note) // Lấy đối tượng hiện tại
    }
    delData = ()=>{
      // console.log(this.props.note.id)
      this.props.getDelData(this.props.note.id)
    }
    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id="note1">
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href= {'#number'+this.props.id} >
                   {this.props.title}
                </a>
              </h5>
            </div>
            <div id={'number'+this.props.id} className="collapse in" role="tabpanel" >
              <div className="card-body">
               {this.props.content}
              </div>
              <button className="btn btn-warning mb-3" onClick={ ()=> this.changeEdit() }>Sửa</button>
              <button className="btn btn-danger mb-3" onClick={()=> this.delData()}>Xoá</button>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({
          type:'CHANGE_EDIT_STATUS'
        })
      },
      getEditData: (editObject) => {
        dispatch({
          type:'GET_EDIT_DATA',
          editObject
        })
      },
      getDelData: (delId) => {
        dispatch({
          type:'DELETE_DATA',
          delId
        })
      },

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)