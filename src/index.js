import React from "react";
import ReactDOM from "react-dom";
import { TabList, Tab }  from '../build/ReactTab';

class HelloMessage extends React.Component {
  render() {
    return (
      <TabList>
        <Tab label="tab1">tab 1 content</Tab>
        <Tab label="tab2">tab 2 content</Tab>
        <Tab label="tab3">tab 3 content</Tab>
      </TabList>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
