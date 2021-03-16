import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialog.module.css';

const Dialog = ({name, id}) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
}

export default Dialog;