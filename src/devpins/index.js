import React, { Component, PropTypes } from 'react';
import Card from './Card';
import Documentation from './Documentation';
import StateRecorder from './StateRecorder';
import JsonData from './JsonData';

const state = [];

export function registerCard(card) {
    state.push(card);
}

export function getCards() {
    return state;
}

export function buildCard(name, body) {
  const parts = [];

  for(let i=0, len=body.length; i<len; ++i) {
    const form = body[i];

    // string -> documentation shortcut
    if (typeof form === 'string') {
      parts.push(
        <Documentation text={form} key={i} />
      );
      continue;
    }

    // function + props -> statelogger shortcut
    if (typeof form === 'function') {
      const nextForm = body[i + 1]
      if (i + 1 < len &&
          typeof body[i + 1] === 'object') {
        parts.push(
          <StateRecorder {...body[i+1]} key={i} fn={form} />
        )
        i = i + 1;
      } else {
        parts.push(
          <StateRecorder fn={form} key={i} />
        )
      }
      continue;
    }

    if (typeof form === 'object') {
      parts.push(<JsonData data={form} key={i} />);
      continue;
    }

    // otherwise assume the form is a react component
    parts.push(<div key={i}>{form}</div>);
  }

  return () => {
    return <Card name={name}>{parts}</Card>;
  }
}
