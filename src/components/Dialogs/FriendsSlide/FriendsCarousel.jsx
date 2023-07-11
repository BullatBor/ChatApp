import React, { useEffect, useRef, useState } from 'react'
import classes from '../Dialogs.module.css'
import { FriendBlock } from './FriendsBlock'
import LeftBtn from '../../../assets/left.png'
import RightBtn from '../../../assets/right.png'
import { Preloader } from '../../common/preloader/Preloader'
import { FriendsSliderBlank } from '../../common/preloader/Blank/Blank'

export const FriendsSlide = (props) => {
  const [position, setPosition] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    props.getUsers(3, 6, true);
  }, []);

  const handleScrollLeft = () => {
    if (position - 100 < -230) setPosition(-160);
    else setPosition(position - 80);

  };

  const handleScrollRight = () => {
    if (position + 100 > 0) {
      setPosition(0);
    }
    else setPosition(position + 80); // Измените значение смещения, чтобы подстроиться под ваш список
  };
  return (
    <div className={classes.SlideBlock}>
      <div className={classes.FriendsCarousel}>
        <div className={classes.btnLeft} onClick={handleScrollRight}>
          <img src={LeftBtn} />
        </div>
        {
          props.isFetching ? <FriendsSliderBlank />
            :
            <div className={classes.FriendsList} style={{ transform: `translateX(${position}px)` }} ref={listRef}>
              {
                props.state.map((item) => {
                  return <FriendBlock key={item.id} id={item.id} name={item.name} img={item.photos.large} />
                })

              }
            </div>
        }
        <div className={classes.btnRight} onClick={handleScrollLeft}>
          <img src={RightBtn} />
        </div>
      </div>
    </div>
  )
}






