import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css';
import Dialog from "../dialog/dialog";
import Message from "../message/message";

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs__inner}>
                    <Dialog name="User 1" id="1"/>
                    <Dialog name="User 2" id="2"/>
                    <Dialog name="User 3" id="3"/>
                    <Dialog name="User 4" id="4"/>
                    <Dialog name="User 5" id="5"/>
                </div>
                <div className={s.messages}>
                    <Message text="Hello"/>
                    <Message text="Hi"/>
                    <Message text="How are u?"/>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;