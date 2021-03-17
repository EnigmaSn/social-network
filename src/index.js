import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const postsData = [
    {
        id: 1,
        message: 'Hi, how are you',
        likesCount: 3
    },
    {
        id: 2,
        message: 'I\'m fine',
        likesCount: 26
    },

];
const dialogsData = [
    {
        id: 1,
        name: 'User1'
    },
    {
        id: 2,
        name: 'User2'
    },
    {
        id: 3,
        name: 'User3'
    },
    {
        id: 4,
        name: 'User4'
    },
    {
        id: 5,
        name: 'User5'
    },
];
const messagesData = [
    {
        id: 1,
        message: 'text1'
    },
    {
        id: 2,
        message: 'text2'
    },
    {
        id: 3,
        message: 'text3'
    },
];

ReactDOM.render(
  <React.StrictMode>
    <App
        postsData={postsData}
        dialogsData={dialogsData}
        messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
