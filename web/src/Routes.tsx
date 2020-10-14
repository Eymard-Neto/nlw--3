import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import orphanagesMap from "./pages/orphanages/orphanagesmap";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={orphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
