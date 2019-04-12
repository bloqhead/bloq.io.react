import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import More from "./pages/More";

// assets
import Logo from "./images/logo.svg";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <main>

          <div className="sidebar">
            <NavLink exact to="/" className="logo">
              <img src={Logo}/>
            </NavLink>
            <ul className="menu">
              <li><NavLink exact to="/" className="menu__link">Home</NavLink></li>
              <li><NavLink to="/work" className="menu__link">Work</NavLink></li>
              <li><NavLink to="/more" className="menu__link">More</NavLink></li>
            </ul>
          </div>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/work" component={Work}/>
            <Route path="/more" component={More}/>
          </div>

          <footer>
            <p className="copyright">&copy; <NavLink to="/">bloq.io</NavLink> {new Date().getFullYear()}</p>
            <ul className="social">
              <li><a href="https://twitter.com/bloqhead">Twitter</a></li>
              <li><a href="https://github.com/bloqhead">Github</a></li>
            </ul>
          </footer>

        </main>
      </HashRouter>
    );
  }
}
