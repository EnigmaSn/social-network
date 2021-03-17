import React from 'react';
//import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css';
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = ({ dialogsData, messagesData }) => {

    const messageElements = messagesData
        .map((message) => <Message text={message.message} id={message.id}/>);
    
    const dialogElements = dialogsData
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__inner}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    );
}
export default Dialogs;