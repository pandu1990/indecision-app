import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const rootAppElement = document.getElementById('app')

ReactDOM.render(<IndecisionApp appElement={rootAppElement} />, rootAppElement);
