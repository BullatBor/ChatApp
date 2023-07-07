import React, { useEffect } from 'react'
import classes from './Dialogs.module.css'
import { DialogsSearch } from './DialogSearch/Dialogs';
import { DialogItem } from './DialogsItem/DialogItem';
import { FriendsSlide } from './FriendsSlide/FriendsCarousel';
import { Message } from './MessageItem/Message';
import { Formik, Form, Field } from 'formik';
import { requiredField, ValidateMessage } from '../../utils/validators';
import { MessageInput, PasswordInput } from '../common/preloader/FormControl/FormControl';
import { Preloader } from '../common/preloader/Preloader';
import defaultPhoto from "../../assets/ava.png"
import { Navigate, NavLink } from 'react-router-dom';



export const Dialogs = (props) => {
  useEffect(() => {
    props.getDialogsThunkCreator(1, 9, true);
  }, [])
  let userProfile = props.DialogsPage.Dialogs.find(item => item.id === Number(props.router.params.userId))
  return (
    <div className={classes.dialogs}>
      <div className={classes.sideBar}>
        <DialogsSearch />
        <FriendsSlide state={props.users} getUsers={props.getUsersThunkCreator} />
        <div className={classes.dialogsItems}>
          {props.DialogsPage.Dialogs.map((item) => {
            return <DialogItem key={item.id} id={item.id} name={item.name} img={item.photos.large} />
          })
          }
        </div>
      </div>
      {
        props.router.params.userId && props.DialogsPage.Dialogs.length ?
          <MessageBlock messages={props.DialogsPage.Messages} userId={props.router.params.userId} getProfile={props.getProfileThunkCreator}
            isFetching={props.isFetching} profile={userProfile}
          />
          :
          <div className={classes.messages}>
            <div className={classes.defaultMessage}>
              <span>Выберите чат</span>
            </div>
          </div>
      }
    </div>
  )
}

const MessageBlock = (props) => {
  const onSendMessage = (values, { setSubmitting }) => {
    props.SendMessage(values.message);
    values.message = ""
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  }

  return (
    <div className={classes.messages}>
      <div className={classes.NavName}>
        <div className={classes.NavNameTitle} >
          <NavLink to={"/profile/" + props.userId}>
            <span>{props.profile.name}</span>
          </NavLink>
        </div>
        <div className={classes.NavNamePhoto}>
          <img src={props.profile.photos.large || defaultPhoto} />
        </div>
      </div>
      <div className={classes.messageList}>
      </div>
      <div className={classes.MessageInputBlock}>
        <div className={classes.MessageInput}>
          <div className={classes.MessageInputItem}>
            <Formik
              initialValues={{ message: '' }}
              onSubmit={onSendMessage}
            >
              {({ errors, touched, values, isSubmitting }) => (
                <Form className={classes.FormItems}>
                  <Field name={"message"} placeholder="Введите сообщение" validate={requiredField} component={MessageInput} />
                  {
                    values.message.length > 0 &&
                    <button type='submit' disabled={isSubmitting}>отправить</button>
                  }
                </Form>
              )}
            </Formik>
          </div>

        </div>
      </div>

    </div>
  )
}