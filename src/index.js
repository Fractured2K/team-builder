import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Index() {

    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);
