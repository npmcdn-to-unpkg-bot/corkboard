import React, { Component, PropTypes } from 'react';

export default class Breadcrumbs extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  render() {
    const { links } = this.props;
    return (
        <div>
        {links.map(({title, url}) => {
          return <a href={url}>{title}</a>;
        })}
        </div>
    );
  }
}
