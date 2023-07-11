import React, { useEffect, useState } from 'react'
import { Paginator } from '../common/preloader/Paginator/Paginator';
import { Preloader } from '../common/preloader/Preloader';
import { User } from './User/User';
import classes from './Users.module.css'

export const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
  const [newCurrentPage, setCurrentPage] = useState(1)
  const [Fetch, setFetch] = useState(true);
  useEffect(() => {
    if (Fetch) {
      console.log("test")
      props.getUsers(newCurrentPage, pageSize, true);
      setCurrentPage(prevState => prevState + 1);
      setFetch(false);
    }

  }, [Fetch])

  useEffect(() => {
    const Scroll = document.querySelector(".container")
    Scroll.addEventListener("scroll", scrollHandler);
    return function () {
      Scroll.removeEventListener('scroll', scrollHandler);
    }
  }, [totalUsersCount]);

  const scrollHandler = (e) => {
    if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100 && users.length < totalUsersCount) {
      setFetch(true)
    }
  }
  return (
    <>
      {

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
      }
    </>
  )
}
