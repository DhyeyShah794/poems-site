import React from "react";
import Quotes from './Components/Quotes'
import Navbar from "./Components/Navbar";
import App from './App';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const Main = () => {
    return (
        <Router>
        <div>
          <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/quotes" component={Quotes} />
          <Redirect from="*" to="/" />
          </Switch>
          <Route exact path="*" component={Navbar} />
          <Redirect from="*" to="/" />
        </div>
      </Router>
    );
}

export default Main;