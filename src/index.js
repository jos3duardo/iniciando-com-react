import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloWord from "./HelloWord";
import PropsValidation from "./PropsValidation";

ReactDOM.render(
    <PropsValidation name="Jose" age="29" height="1.75"/>,
    //<HelloWord txt = '/Hello Word Reac' />,
    document.getElementById('root')
)
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
