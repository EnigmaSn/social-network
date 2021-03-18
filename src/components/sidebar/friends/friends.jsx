import React, { Component } from 'react';
import s from './friends.module.css';

export default class Friends extends Component {
    render() {
        const friendsElement = this.props.friendsData.map((friend) => (
            <li className={s.friendsItem} key={friend.id}>
                <img src="https://cdn.vox-cdn.com/thumbor/Bsf6aA_IHZbsXWeo-GSoIDq3AxY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21730161/avatar_the_last_airbender_image.jpeg" alt="Avatar"/>
                {friend.name}</li>
        ));
        return (
            <div className={s.friends}>
                <h2>Friends</h2>
                <ul className={s.friendsList}>
                    {friendsElement}
                </ul>
            </div>
        );
    }
}