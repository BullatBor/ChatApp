import React from 'react'
import { User } from './User/User';
import classes from './Users.module.css'
import axios from 'axios';

export class Users extends React.Component {
  componentDidMount(){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
      this.props.setUsers(responce.data.items);
})
  }
  render() {
    return (
      <div className={classes.Users}>
        {
          this.props.users.map(item => {
            return <User 
            key={item.id} state={item}
            followed={this.props.followed}
            unfollowed={this.props.unfollowed}
            setUsers={this.props.setUsers}
            />
          })
        }
         
      </div>
    )
  }
}


