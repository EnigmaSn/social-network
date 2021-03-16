import React from 'react';
import s from './profile-info.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.meissl.com/media/images/8f24db1f/schweiz.jpg" alt="main picture" />
            </div>
            <div className={s.descriptionBlock}>
                <p>ava + info</p>
            </div>
        </div>
    );
}

export default ProfileInfo;