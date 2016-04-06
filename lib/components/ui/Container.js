import React, { PropTypes } from 'react';

const Style = {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 640
};

export default function Container({children}) {
    return <div style={Style}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node
};
