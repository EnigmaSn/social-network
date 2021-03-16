import React from "react";
import s from  './sidebar.module.css';
import {NavLink} from 'react-router-dom';


const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul>
                <li className={ `${s.item} ${s.active}` }>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;