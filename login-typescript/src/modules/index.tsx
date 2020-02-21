import React, { FC, ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/components/Login";
import Home from "./home/components/home";

const Modules: FC = (): ReactElement => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Login />} />
            <Route path ="/home" render={() => <Home />} />
            </Switch>
        </Router>
    );
};

export default Modules;