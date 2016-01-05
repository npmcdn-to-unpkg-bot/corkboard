import { buildCard, registerCard, getCards } from './devpins/index.js';

import React, { Component } from 'react';

registerCard({
    path: ['PinUI', 'SegmentedControl'],
    func: buildCard(null, [
                    `
# Counter

Short description.

## Purpose

The purpose of this widget is to let users modally switch between content.

## Intented Use

blah blah`])
})

export default class Counter extends Component {
    render() {
        const { count, onClick } = this.props;
        return (
          <div>{count * 5}</div>
        );
    }
}

registerCard({
    path: ['PinUI', 'SegmentedControl'],
    func: buildCard('Example', [
      "This is an awesome _test_.",
      (atom) => {
        const onClick = () => {
          atom.reset(atom.deref() + 1);
        }
        return (
            <div>
          <Counter count={atom.deref()} />
          <button onClick={onClick}>Increment</button>
          </div>
            )

      },
      { initialState: 0, showState: true, recordState: true },
      {foo: 'bar'}
    ]),
})
