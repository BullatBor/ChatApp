import React from 'react'
import classes from './ProfileInfo.module.css'


export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })//setState асинхронный
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })//setState асинхронный
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){//При изменении state используется условие чтобы не было цикла
            this.setState({
                status: this.props.status
            })
        }
    }
  render() {
    return (
        <div className={classes.status}>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={ this.activateEditMode }>{this.props.status || "No status"}</span>
            </div>
            }
            {this.state.editMode &&
            <div className={classes.Input}>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
            </div>
            }  
        </div>
    )
    }
}
