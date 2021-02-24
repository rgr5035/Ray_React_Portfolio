import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "@material/react-tab-bar/dist/tab-bar.css";
import "@material/react-tab-scroller/dist/tab-scroller.css";
import "@material/react-tab/dist/tab.css";
import "@material/react-tab-indicator/dist/tab-indicator.css";
import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";

function App() {
  return (
    <div className="App">
      <TabBar>
        <Tab>
          <span className="mdc-tab__text-label">One</span>
        </Tab>
        ...
      </TabBar>
      <button class="mdc-button foo-button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Button</span>
      </button>
    </div>
  );
}

// mdc.ripple.MDCRipple.attachTo(document.querySelector(".foo-button"));

export default App;
