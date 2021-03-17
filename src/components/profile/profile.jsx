import React, { Component } from "react";
import s from './profile.module.css'
import MyPosts from "./my-posts/my-posts";
import ProfileInfo from "./profile-info/profile-info";

export default class Profile extends Component {
    render() {
        const { postsData } = this.props.data;

        return (
            <div className={s.profile}>
                <ProfileInfo />
                <MyPosts postsData={postsData}/>
            </div>
        );
    }

}