import React from 'react';
import s from './new-post.module.css';

const NewPost = (props) => {
    const newPostElement = React.createRef();
    const addPost = () => {
        let txt = newPostElement.current.value;
        //alert('тест');
        debugger;
        alert(txt);
    }

    return (
      <form className={s.newPost}>
          <textarea ref={ newPostElement } name="" id="" cols="50" rows="4"></textarea>
          <button onClick={ addPost }  type="submit" className={s.submitBtn}>Post</button>
      </form>
    );
};

export default NewPost;