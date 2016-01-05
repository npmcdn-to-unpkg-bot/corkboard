import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import styles from './Documentation.css'

export default class Documentation extends Component {
  render() {
    const html = marked(this.props.text);
    return <div className={styles.markdown}
                dangerouslySetInnerHTML={{__html: html}} />;
  }
}
