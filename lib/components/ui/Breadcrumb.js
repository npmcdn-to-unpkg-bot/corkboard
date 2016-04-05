import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Breadcrumbs extends Component {
  static propTypes = {
    // links: PropTypes.string.isRequired,
  }

  render() {
    const { links } = this.props;
    return (
        <div>
            {links.map(({title, url}, i) =>
                <Link className="p1" to={url} key={i}>{title}</Link>
            )}
        </div>
    );
  }
}
