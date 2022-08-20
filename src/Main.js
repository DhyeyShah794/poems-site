import React from "react";
import Quotes from './Pages/Quotes/Quotes'
import Navbar from "./Components/Navbar/Navbar";
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const Main = () => {
    return (
        <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
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