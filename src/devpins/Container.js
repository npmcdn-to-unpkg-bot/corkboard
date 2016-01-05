import React, { Component } from 'react';
import style from './container.css';

export default class Container extends Component {
    render() {
        const { children } = this.props;
        return <div className={style.root}>{children}</div>
    }
}
