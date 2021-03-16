import React from 'react';
import s from './post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <div className={s.post}>
            <img src="https://cdn.vox-cdn.com/thumbor/Bsf6aA_IHZbsXWeo-GSoIDq3AxY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21730161/avatar_the_last_airbender_image.jpeg" alt="avatar"/>
            { message }
            <p>Likes: { likesCount }</p>
        </div>
    );
}

export default Post;