/* eslint react/no-danger:0 */

import React, { PropTypes } from 'react';
import marked from 'marked';

export default function Markdown({text}) {
    const html = marked(text);
    return (
        <div dangerouslySetInnerHTML={{__html: html}} />
    );
}

Markdown.propTypes = {
    text: PropTypes.string.isRequired,
};
