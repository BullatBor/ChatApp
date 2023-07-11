import { Field, Form, Formik } from 'formik';
import React, { Children, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CreateField, EditDefaultInput, LoginInput, MessageInput, SearchInput, StatusEditField, Textarea } from '../common/preloader/FormControl/FormControl';
import classes from './Edit.module.css';
import classNames from 'classnames'
import { EditMenu } from './EditMenu';


const EditContacts = (props) => {
  return (
    <div >
      <MainInfoEdit profile={props.profile} photo={props.defaultPhoto} saveProfile={props.saveProfile} userId={props.userId}/>
    </div>
  )
}

const MainInfoEdit = ({ profile, ...props }) => {
  
  const contacts = profile.contacts;
  for ( let key in contacts) {
    if(contacts[key] == null) contacts[key] = "";
    /* ... делать что-то с obj[key] ... */
  }

  
  const submit = (values, { setSubmitting, setStatus }) => {
    props.saveProfile(values, setStatus);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  }
  return (
    <div className={classes.pageContactsEdit}>
      <div className={classes.header}>
        <div className={classes.headerContacts}>
          Контакты
        </div>
      </div>
      <Formik
        initialValues={{
          contacts: {
            facebook: contacts.facebook, github: contacts.github, vk: contacts.vk, instagram: contacts.instagram,
            twitter: contacts.twitter, website: contacts.website, youtube: contacts.youtube, mainLink: contacts.mainLink,
          },
          AboutMe: profile.aboutMe, lookingForAJob: false, lookingForAJobDescription: profile.lookingForAJobDescription, fullName: profile.fullName
        }}
        onSubmit={submit}
      >{({ errors, status }) => (
        <Form>
          {
            status && status.success
              &&
              <div className={classes.submitSuccess}>
                <span>{status.success}</span>
                <p>Новые данные будут отражены на вашей странице.</p>
              </div>           
          }
          {
            status && status.error
              &&
              <div className={classes.submitUnsuccess}>
                <span>{status.error}</span>
                <p>Не корректные данные</p>
              </div>           
          }
          {
            Object.keys(contacts).map(key => {
              return <Contact key={key} contact={key}>{CreateField('', `contacts.${key}`, null, EditDefaultInput)}</Contact>
            })
          }

          <div className={classes.editProfileLine}></div>
          <div className={classes.formSubmitBtn}>
            <button type='submit'>Сохранить</button>
          </div>
        </Form>
      )}
      </Formik>
    </div>
  )
}

const Contact = ({ contact, children }) => {
  return <div className={classes.briefInfo}>
    <div className={classes.briefInfoLabel}>
      {contact}:
    </div>
    {children}
  </div>
}

export default EditContacts;

/*
facebook: contacts.facebook, github: contacts.github, vk: contacts.vk, instagram: contacts.instagram, 
          twitter: contacts.twitter, website: contacts.website, youtube: contacts.youtube, mainLink: contacts.mainLink,
*/
