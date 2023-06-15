import React from 'react'
import classes from './Paginator.module.css'

export const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);
  return (
          <div className={classes.paginator}>
            {
              slicedPages.map(p => {
              return <span
              onClick={(e) => {onPageChanged(p)}}
              className={currentPage === p ? classes.selectedPage: classes.pagination}>{p}</span>
              })
            }
          </div>    
  )
}
