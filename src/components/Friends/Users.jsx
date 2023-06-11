import React from 'react'
import { User } from './User/User';
import classes from './Users.module.css'

export const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);
  return (
    <div className={classes.Users}>
          <div>
            {
              slicedPages.map(p => {
              return <span
              onClick={(e) => {props.onPageChanged(p)}}
              className={props.currentPage === p ? classes.selectedPage: classes.pagination}>{p}</span>
              })
            }
          </div>
          {
            props.users.map(item => {
              return <User 
              key={item.id} state={item}
              followed={props.followed}
              unfollowed={props.unfollowed}
              setUsers={props.setUsers}
              isFollowing={props.isFollowing}
              setFollowButton = {props.setFollowButton}
              />
            })
          }       
      </div>
  )
}
