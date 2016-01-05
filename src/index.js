import React from 'react';
import { render } from 'react-dom';
import { App } from './devpins/App';

// const namespaces = [
//     {
//         name: 'SegmentedControl',
//         cards: [
//             {title: "Foo"},
//         ],
//     },
// ]

import Counter from './Counter'

import { getCards } from './devpins/index.js'

import { Router, Route, Link } from 'react-router'

render(
    <App namespaces={getCards()} />,
  document.getElementById('root'));
