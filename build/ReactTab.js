import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(index) {
    return e => {
      this.setState({
        tabIndex: index
      });
    };
  }

  renderTabLabels() {
    return React.createElement("div", {
      className: "tab-labels"
    }, this.props.children.map((item, index) => {
      return React.createElement("div", {
        key: index,
        className: "tab-label",
        onClick: this.handleTab(index)
      }, item.props.label);
    }));
  }

  renderTabContent() {
    return React.createElement("div", {
      className: "tab-content"
    }, this.props.children[this.state.tabIndex]);
  }

  render() {
    return React.createElement("div", {
      className: "tab-list"
    }, this.renderTabLabels(), this.renderTabContent());
  }

}

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", {
      label: this.props.label
    }, this.props.children);
  }

}

export { TabList, Tab };
