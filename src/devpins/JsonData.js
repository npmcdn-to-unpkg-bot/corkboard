import React, { Component, PropTypes } from 'react';

export default class JsonData extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  }

  render() {
    const { data } = this.props;
    return (
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
    );
  }
}
