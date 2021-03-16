import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import Music from "./components/music/music";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="app">
            <Header />
            <Sidebar/>
            <div className="app__content">
                <Route path="/messages" component={Dialogs} />
                <Route path="/profile" component={Profile} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
