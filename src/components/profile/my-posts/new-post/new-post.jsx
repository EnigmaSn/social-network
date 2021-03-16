import React from 'react';
import s from './new-post.module.css';

const NewPost = (props) => {
  return (
      <form className={s.newPost}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button type="submit" className={s.submitBtn}>Запостить</button>
      </form>
  );
};

export default NewPost;