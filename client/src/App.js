import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Form from "./components/Form";
import Guide from "./components/Guide";
import Contactus from "./components/Contactus";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/guide" component={Guide} />
          <Route exact path="/contactus" component={Contactus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
