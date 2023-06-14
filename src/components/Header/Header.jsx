import React, { useState } from 'react';
import ExitIcon from "./../../assets/exit.png"
import classes from './Header.module.css';


const Header = (props) => {
  const [isShow, setShow] = useState(false);
  const showModal = () => {
    if (isShow) setShow(false)
    else setShow(true)
  }

  const hideModal = () => {
   alert("asfsd")
  }

  const logout = () => {
    setShow(false)
    props.LogoutThunkCreator()
  }

  return (
    <header className={classes.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png?20141130224707' />
      <div className={classes.loginBlock} onBlur={hideModal}>
        {
          props.isAuth
          &&
          <div className={classes.LogPhoto} onClick={showModal} >
            <img src={props.avatar} />
          </div>
        }
        {
          isShow &&
          <div className={classes.modal} onClick={logout} >
            <div className={classes.itemPanel}>
              <div className={classes.item}>
                <img src={ExitIcon} />
                <span>Выйти</span>
              </div>
            </div>
          </div>
        }
      </div>
    </header>
  )
}

export default Header;
