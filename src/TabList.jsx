import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /** 显示第几个tab的内容，默认为第一个 */
  current: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /** 内嵌Tab组件 */
  children: PropTypes.node.isRequired,
}

const defaultProps = {
  current: 0
}

class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: this.props.current || 0
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
          return <div key={index} className={`tab-label${classnames({' active': this.state.tabIndex == index})}`} onClick={this.handleTab(index)}>{item.props.label}</div>
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

TabList.propTypes = propTypes;
TabList.defaultProps = defaultProps;

export default TabList;
