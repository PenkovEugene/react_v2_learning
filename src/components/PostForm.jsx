import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
          type='text' 
          placeholder="Название поста"
        />
        <MyInput
          // ref = {bodyInputRef}
          value={post.body}
          onChange={event => setPost({...post, body: event.target.value})}
          type='text' 
          placeholder="Описание поста"
        />
        {/* Неуправляемый/Неконтролируемый компонент */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
  )
}

export default PostForm