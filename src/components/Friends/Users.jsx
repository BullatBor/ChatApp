import React from 'react'
import { Paginator } from '../common/preloader/Paginator/Paginator';
import { User } from './User/User';
import classes from './Users.module.css'

export const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  return (
    <div className={classes.Users}>
          <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
          pageSize={pageSize} onPageChanged={onPageChanged}
          />
          {
            users.map(item => {
              return <User 
              key={item.id} state={item}
              followed={props.followed}
              unfollowed={props.unfollowed}
              setUsers={props.setUsers}
              isFollowing={props.isFollowing}
              />
            })
          }       
      </div>
  )
}
