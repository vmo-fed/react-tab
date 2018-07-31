import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
const propTypesTabList = {
  /** 显示第几个tab的内容，默认为第一个 */
  current: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** 内嵌Tab组件 */
  children: PropTypes.node.isRequired
};
const defaultPropsTabList = {
  current: 0
};

class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: this.props.current || 0
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
        className: `tab-label${classnames({
          ' active': this.state.tabIndex == index
        })}`,
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

TabList.propTypes = propTypesTabList;
TabList.defaultProps = defaultPropsTabList;
const propTypes = {
  /** tab选项的值 */
  label: PropTypes.string.isRequired,

  /** tab的内容 */
  children: PropTypes.node.isRequired
};

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

Tab.propTypes = propTypes;
export { TabList, Tab };
