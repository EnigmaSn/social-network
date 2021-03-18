import React from 'react';
import s from './new-message.module.css';

const NewMessage = () => {
    const newMessageElement = React.createRef();
    const addMessage = () => {
        const newMessage = newMessageElement.current.value;
        alert(newMessage);
    };
    return (
        <form>
            <input type="text" ref={ newMessageElement } placeholder="Write your message"/>
            <button type="submit" onClick={ addMessage }>Send</button>
        </form>
    );
}

export default NewMessage;