import React from 'react';
import s from './my-posts.module.css';
import Post from "./post/post";
import NewPost from "./new-post/new-post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <NewPost />
            <div className={s.posts}>
                <Post message='Hi, how are you' likesCount='15'/>
                <Post message='It is my first message' likesCount='30'/>
            </div>
        </div>
    );
}

export default MyPosts;