import React from 'react'
import { Navigate } from 'react-router-dom';
import classes from './Dialogs.module.css'
import { DialogsSearch } from './DialogSearch/Dialogs';
import { DialogItem } from './DialogsItem/DialogItem';
import { FriendsSlide } from './FriendsSlide/FriendsCarousel';
import { Message } from './MessageItem/Message';
import { Formik, Form, Field} from 'formik';
import { requiredField, ValidateMessage } from '../../utils/validators';
import { MessageInput } from '../common/preloader/FormControl/FormControl';



export const Dialogs = (props) => {
const onSendMessage = (value) => {
  props.SendMessage(value)
}


  return (
    <div className={classes.dialogs}>
      <div>
          <DialogsSearch/>
          <FriendsSlide state={props.DialogsPage}/>
          <div className={classes.dialogsItems}>
          {props.DialogsPage.Dialogs.map((item) => {
            return <DialogItem key={item.id} id={item.id} name={item.name}/>
          })
        }
        </div>       
      </div>
      <div className={classes.messages}>
        <div className={classes.NavName}>
            <div>
              Имя собеседника
            </div>
        </div>
        <div className={classes.messageList}>
          {props.DialogsPage.Messages.map(item => {
            return <Message key={item.id} message={item.message}/>
          })}
        </div>
        <div className={classes.MessageInputBlock}>
            <div className={classes.MessageInput}>
              <div className={classes.MessageInputItem}>
                <Formik
                  initialValues={ { message: '' }}
                  onSubmit={onSendMessage}
                >
                  {({errors, touched, isSubmitting}) => (
                  <Form>
                    <Field name={"message"} placeholder="Введите сообщение" validate={requiredField} component={MessageInput}/>
                    <button type='submit' disabled={isSubmitting}>отправить</button> 
                  </Form>
                  )}
                </Formik>  
              </div>  
               
            </div>            
        </div>

      </div>
    </div>
  )
}
