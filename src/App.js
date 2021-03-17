import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import Music from "./components/music/music";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {

    render() {
        // const { dialogsData, messagesData } = this.props.state.messagePage;
        // const { postsData } = this.props.state.profilePage;
        return (
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <Sidebar/>
                    <div className="app__content">
                        <Route path="/dialogs">
                            <Dialogs data={this.props.state.messagePage} />
                        </Route>
                        <Route path="/profile">
                            <Profile data={this.props.state.profilePage}/>
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/music">
                            <Music />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                    </div>
                </div>
            </BrowserRouter>
        );
    };

}
