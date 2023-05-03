import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'


export const MyPosts= (props) => {

  let NewPost = React.createRef()
  const onAddPost = () => {
    props.addPost();
  }

  const ChangeTextArea = () => {
    let text = NewPost.current.value;
    props.updateNewPostText(text);
  }
  let mass = props.post;
  return (
    <div className={classes.content}>
      <div className={classes.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <textarea 
          onChange={ChangeTextArea}
          ref={NewPost}
          value={props.newPostText}
          ></textarea>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
          <div className={classes.posts}>
            { 
              mass.map(item => {
                return <Post key={item.id} message={item.message} likesCount={item.likesCount}/>
              })
             
            }
          </div>
      </div>
    </div>
      
  )
}
