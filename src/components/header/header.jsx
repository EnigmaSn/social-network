import React from "react";
import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/slack.svg" alt="Logo"/>
        </header>
    );
};

export default Header;