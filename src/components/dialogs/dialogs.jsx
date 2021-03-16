import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialog__items}>
                    <div className={`${s.dialog} ${s.active}`}>
                        <NavLink to="/dialogs/1">User 1</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">User 2</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">User 3</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/4">User 4</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/5">User 5</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Message 1</div>
                    <div className={s.message}>Message 2</div>
                    <div className={s.message}>Message 3</div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;