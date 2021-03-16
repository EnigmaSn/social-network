import React from 'react';
import s from './my-posts.module.css';
import Post from "./post/post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New Post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' likesCount='15'/>
                <Post message='It is my first message' likesCount='30'/>
            </div>
        </div>
    );
}

export default MyPosts;