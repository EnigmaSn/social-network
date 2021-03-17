import React, { Component } from 'react';
//import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css';
import Dialog from "./dialog/dialog";
import Message from "./message/message";

export default class Dialogs extends Component {
    render() {
        const { messagesData, dialogsData } = this.props.data;

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
    };


}