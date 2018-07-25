import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(index) {
    return (e) => {
      this.setState({
        tabIndex: index
      });
    }
  }

  renderTabLabels() {
    return (
      <div className="tab-labels">
        {this.props.children.map((item, index) => {
          return <div key={index} className="tab-label" onClick={this.handleTab(index)}>{item.props.label}</div>
        })}
      </div>
    )
  }

  renderTabContent() {
    return (
      <div className="tab-content">{this.props.children[this.state.tabIndex]}</div>
    )
  }

  render() {
    return (
      <div className="tab-list">
        {this.renderTabLabels()}
        {this.renderTabContent()}
      </div>
    );
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div label={this.props.label}>{this.props.children}</div>;
  }
}

export {
  TabList,
  Tab
};
