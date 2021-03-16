import React from "react";
import s from './profile.module.css'
import MyPosts from "./my-posts/my-posts";
import ProfileInfo from "./profile-info/profile-info";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;