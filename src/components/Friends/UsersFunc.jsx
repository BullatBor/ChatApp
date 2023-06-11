import React from 'react'
import { User } from './User/User';
import classes from './Users.module.css'
import axios from 'axios';


export const Usersas = (props) => {
  let getUsers = () => {
  if(props.users.length === 0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
      debugger;
      props.setUsers(responce.data.items);
    });
  }  
}

  return (
    <div className={classes.Users}>
      <button onClick={getUsers}>GET</button>
      {
        props.users.map(item => {
          return <User 
          key={item.id} state={item}
          followed={props.followed}
          unfollowed={props.unfollowed}
          setUsers={props.setUsers}
          />
        })
      }
       
    </div>
  )
}
