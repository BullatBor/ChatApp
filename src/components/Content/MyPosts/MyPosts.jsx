import classNames from 'classnames'
import { Field, Form, Formik } from 'formik'
import React, {PureComponent, useState} from 'react'
import { Textarea } from '../../common/preloader/FormControl/FormControl'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'


export const MyPosts = (props) => {
  const onAddPost = (values, { setSubmitting }) => {
    props.addPost(values.textField);
    values.textField = ""
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  }
  const validateText = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value.length > 30) {
      error = 'Invalid email address';
    }
    return error
  }
  
  let mass = props.posts;

  const [isFocus, setFocus] = useState(false)

  const FocusInput = () => {
    if(isFocus) setFocus(false)
    else setFocus(true)
  }

  const FocusInput2 = () => {
    alert("sfsdf")
  }

    return (
      <div className={classes.content}>
        <div className={classes.postsBlock}>
          <div className={classes.NewPost} onBlur={FocusInput2}>
            <img src={props.avatar} />
            <Formik
              initialValues={{ textField: '' }}
              onSubmit={onAddPost}
            >{({ errors, touched, isSubmitting }) => (
              <Form>
                <Field className={classes.NewPostInput} component={Textarea} name={"textField"} validate={validateText} placeholder="Что у вас нового?" onFocus={FocusInput} />
                {
                  isFocus &&
                  <button className={classNames(classes.NewPostBtn, { [classes.BtnDisabled]: errors.textField })} type="submit" disabled={isSubmitting}>Опубликовать</button>
                }

              </Form>
            )}
            </Formik>
          </div>
          <div className={classes.posts}>
            {
              mass.map(item => {
                return <Post key={item.id} message={item.message} likesCount={item.likesCount} />
              })

            }
          </div>
        </div>
      </div>

    )
  }

