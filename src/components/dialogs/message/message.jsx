import React from 'react';
import s from './message.module.css';

const Message = ({text, user, id}) => {
    return (
        <div>
            <div className={s.message}>
                {text}
            </div>

        </div>

    );
};

export default Message;