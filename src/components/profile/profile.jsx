import React from "react";
import s from './profile.module.css'
import MyPosts from "./my-posts/my-posts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://www.meissl.com/media/images/8f24db1f/schweiz.jpg" alt="main picture" />
            </div>
            <div>
                <p>ava + info</p>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;