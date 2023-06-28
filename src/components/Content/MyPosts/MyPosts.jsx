import classNames from 'classnames'
import { Field, Form, Formik } from 'formik'
import React, { PureComponent, useState } from 'react'
import { Textarea } from '../../common/preloader/FormControl/FormControl'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'


export const MyPosts = (props) => {
  const onAddPost = (values, { setSubmitting }) => {
    const date = CreateDate();
    props.addPost(values.textField, date);
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

  let mass = props.posts.sort(function (a, b) {
    var dateA = a.date.split('-');
    var dateB = b.date.split('-');
    return  new Date(dateB[2], dateB[1] - 1, dateB[0]) - new Date(dateA[2], dateA[1] - 1, dateA[0]);
  });

  const [isFocus, setFocus] = useState(false)

  const FocusInput = () => {
    if (isFocus) setFocus(false)
    else setFocus(true)
  }

  const FocusInput2 = () => {
    alert("sfsdf")
  }

  return (
    <div className={classes.content}>
      <div className={classes.postsBlock}>
        {
          props.isOwner &&
          <div className={classes.NewPost} >
            <img src={props.defaultImage} />
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
        }
        <div className={classes.posts}>
          {
            mass.map(item => {
              return <Post key={item.id} img={item.img} message={item.message}
                likesCount={item.likesCount} comments={item.comments}
                date={item.date}
                fullName={props.fullName} defaultImage={props.defaultImage}
              />
            })

          }
        </div>
      </div>
    </div>

  )
}

const CreateDate = () => {
  const today = new Date(); // Создаем объект Date для сегодняшней даты
  const day = String(today.getDate()).padStart(2, "0"); // Получаем день месяца и добавляем ведущий ноль, если день месяца состоит из одной цифры
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Получаем месяц (от 0 до 11) и добавляем ведущий ноль, если месяц состоит из одной цифры
  const year = today.getFullYear(); // Получаем год
  const dateString = `${day}-${month}-${year}`; // Создаем строку в нужном формате
  console.log(dateString); // Выводим результат в консоль: "27-06-2023"
  return dateString;
}
