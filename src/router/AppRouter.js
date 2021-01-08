import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { CounterApp } from "../CounterApp";

export const AppRouter = () => {
    return (
    <Router>
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counterapp">CounterApp</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>

        {/* Estas route está como High Order Component */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        {/* 
            <Route path="/about">
            <About />
            </Route>
            <Route path="/users">
            <Users />
            </Route>
            <Route path="/">
            <Home />
            </Route>
        */}

            {/* <Route path="/" component={ HomePage }></Route> */}
            <Route exact path="/" component={ HomePage }></Route>
            <Route path="/counterapp" component={ CounterApp }></Route>
            <Route path="/about" component={ AboutPage }></Route>
            <Route path="/contact" component={ ContactPage }></Route>
            
        </Switch>
        </div>
    </Router>
    );
}
