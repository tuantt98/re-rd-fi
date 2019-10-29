import React, { Component } from 'react'
import {connect} from 'react-redux'

 class NoteFrom extends Component {

    constructor(props){
        super(props)
        this.state={
            title:'',
            content:''
        }
    }

    // set đối tượng hiện tại vào trong state, từ đó có đượng ID
    componentWillMount() {
        if(this.props.editItem.id){
            this.setState({
                title: this.props.editItem.title,
                content:this.props.editItem.content,
                id: this.props.editItem.id
            })
        }
    }
    // Lấy giá trị khi chỉnh sửa
    isChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]:value
        })
    }

    
    addData = (title,content)=>{
        if(this.state.id){
        console.log('SỬa dữ liệu')
        let editObject = {};

        editObject.id = this.state.id
        editObject.title = this.state.title
        editObject.content = this.state.content
        this.props.editDataStore(editObject)
        }else {
            let item ={}
        item.title = title
        item.content = content
        // this.props.getData(item)
        this.props.addDataStore(item)
        }
        this.props.editStatus()

    }

    render() {
        return (
            <div className="col-4">
                <h3>Sửa nội dung note</h3>
                <div className="form-group">
                    <input defaultValue={this.props.editItem.title} onChange={ (event)=> this.isChange(event) } type="text" className="form-control" name="title" id="title" placeholder="Tiêu đề note" />
                </div>
                <div className="form-group">
                    <input  defaultValue={this.props.editItem.content}  onChange={ (event)=> this.isChange(event) } type="text" className="form-control" name="content" id="content" placeholder="Nội dung note" />
                </div>
                <button onClick={ ()=> this.addData(this.state.title,this.state.content) } type="submit" className="btn btn-block btn-primary"> Lưu </button>
            </div>

        )
    }
}

// data
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}

// tên reducer thên props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({
                type:'ADD_DATA',
                getItem
            })
        },
        editDataStore: (getItem) => {
            dispatch({
                type:'UPDATE',
                getItem
            })
        },
        editStatus: () => {
            dispatch({
                type:'CHANGE_EDIT_STATUS'
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteFrom)