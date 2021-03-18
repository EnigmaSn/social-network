import React, { Component } from "react";
import s from  './sidebar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "./friends/friends";
import Nav from "./nav/nav";


export default class Sidebar extends Component {
    render() {
        const { friendsData } = this.props.data;
        return (
            <div className={s.sidebar}>
                <Nav />
                <Friends friendsData={friendsData}/>
            </div>
        );
    }

}

