import React, { useState } from 'react'
import classes from './Paginator.module.css'

export const Paginator = ({ currentPage, totalUsersCount, pageSize, onPageChanged }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = currentPage;
  let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
  let maxSize = 10 - curP ;
  let curPL = ((curP - 5) < 0) ? curP + maxSize : curP + 5;
  let test = () => {
     curPL = curPL + 5;
     return null
  }
  let slicedPages = pages.slice(curPF, curPL);
  return (
    <div className={classes.paginator}>
      <div className={classes.item}>{"<"}</div>
      {
        slicedPages.map(p => {
          return <div key={p} className={currentPage === p ? classes.itemDisabled : classes.item } onClick={(e) => { onPageChanged(p) }}>
            <span            
              className={currentPage === p ? classes.selectedPage : classes.pagination}>{p}
            </span>
          </div>
        })
      }
      <div className={classes.item} onClick={test}>{">"}</div>
    </div>
  )
}
