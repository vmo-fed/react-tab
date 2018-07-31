import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div label={this.props.label}>{this.props.children}</div>;
  }
}

Tab.propTypes = propTypes;

export default Tab;
