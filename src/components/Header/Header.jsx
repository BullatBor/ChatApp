import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
  return (
    <header className={classes.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png?20141130224707'/>
        <div className={classes.loginBlock}>
          {
            props.isAuth 
            ?
            <div className={classes.LogPhoto}>
              <img src={props.avatar}/>
            </div>
            :
            <NavLink to={'/login'}>Login</NavLink>
          }
        </div>
      </header>
  )
}

export default Header;
