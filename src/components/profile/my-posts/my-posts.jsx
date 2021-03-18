import React from 'react';
import s from './my-posts.module.css';
import Post from "./post/post";
import NewPost from "./new-post/new-post";

const MyPosts = ({postsData}) => {

    const postsElements = postsData
        .map((post) => {
            return (
                <Post
                    message={post.message}
                    likesCount={post.likesCount}
                    key={post.id}
                />);
        });


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <NewPost />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;