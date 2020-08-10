import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Discover from "./components/Discover";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </Router>
  );
}

export default App;
