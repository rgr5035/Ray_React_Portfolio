import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
