import React, { Component, PropTypes } from 'react';
import styles from './Card.css';

export default class Card extends Component {

    static propTypes = {
        name: PropTypes.string,
    }

    render() {
        const  {  children, name } = this.props;

        const cardStyle = [
            styles.card,
            (name ? styles['card--with-name'] : styles['card--without-name']),
        ].join(' ');

        return (
            <div className={cardStyle}>
                {name ? <div className={styles.name}>{name}</div> : null }
                <div className={styles.content}>{children}</div>
            </div>
        )
    }
}
