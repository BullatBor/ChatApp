import React from 'react'
import classes from '../Dialogs.module.css'
import { FriendBlock } from './FriendsBlock'
import LeftBtn from '../../../assets/left.png'
import RightBtn from '../../../assets/right.png'

export const FriendsSlide = (props) => {

  return(
    <div className={classes.FriendsCarousel}>
      <div className={classes.btnLeft}>
        <img src={LeftBtn}/>
      </div>
      {props.state.Dialogs.map((item) => {
            return <FriendBlock key={item.id} id={item.id} name={item.name}/>
          })
        }
        <div className={classes.btnRight}>
        <img src={RightBtn}/>
      </div>
    </div>
  )
}


