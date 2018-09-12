import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypesTabList = {
  /** 显示第几个tab的内容，默认为第一个 */
  current: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /** 内嵌Tab组件 */
  children: PropTypes.node.isRequired,
}

const defaultPropsTabList = {
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

  handleTab(index, disabled) {
    return (e) => {
      if (disabled) {
        return;
      }
      this.setState({
        tabIndex: index
      });
    }
  }

  renderTabLabels() {
    return (
      <div className="tab-labels">
        {this.props.children.map((item, index) => {
          if (!item) {
            return;
          }
          return <div key={index} className={`tab-label${classnames({' active': this.state.tabIndex == index, ' disabled': item.props.disabled})}`} onClick={this.handleTab(index, item.props.disabled)}>{item.props.label}</div>
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

TabList.propTypes = propTypesTabList;
TabList.defaultProps = defaultPropsTabList;

const propTypes = {
  /** tab选项的值 */
  label: PropTypes.string.isRequired,
  /** tab的内容 */
  children: PropTypes.node.isRequired,
}

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div label={this.props.label} disabled={!!this.props.disabled}>{this.props.children}</div>;
  }
}

Tab.propTypes = propTypes;

export { TabList, Tab };
