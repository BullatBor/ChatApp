import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { MessageInput, SearchInput } from '../common/preloader/FormControl/FormControl';
import ExitIcon from "./../../assets/exit.png"
import vkIcon from "./../../assets/vkIcon.png"
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
      <div className={classes.search}>
        <div className={classes.vkIcon}>
          <img src={vkIcon} />
          <span>ВКОНТАНТЕ</span>
        </div>      
        <SearchForm />
      </div>
      <div className={classes.loginBlock} onBlur={hideModal}>
        {
          props.isAuth
          &&
          <div className={classes.LogPhoto} onClick={showModal} >
            <img src={ props.defaultPhoto} />
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

const SearchForm = () => {
  return (
    <Formik
      initialValues={{ searchText: "" }}>
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Field className={classes.NewPostInput} component={SearchInput} name={"searchText"} placeholder="Поиск" />
        </Form>
      )}
    </Formik>
  )
}


export default Header;
