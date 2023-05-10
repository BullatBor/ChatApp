import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import { Users } from './UsersClass';


const mapStateToProps = (state) => {//Тут для отрисовки возвращаемый обьект сравнивается со старым объектом, после connect
  return {
    users: state.UsersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followed: (id) => {
      dispatch(followAC(id));
    },
    unfollowed: (id) => {
      dispatch(unfollowAC(id))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);//есть свой отрисовщик у connect

