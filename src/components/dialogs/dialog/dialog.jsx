import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialog.module.css';

const Dialog = ({name, id}) => {
    return (
        <div className={`${s.dialog}`}>
            <img src="https://cdn.vox-cdn.com/thumbor/Bsf6aA_IHZbsXWeo-GSoIDq3AxY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21730161/avatar_the_last_airbender_image.jpeg" alt="avatar"/>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
}

export default Dialog;