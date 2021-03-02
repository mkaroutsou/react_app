import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/post/:id">
                    <ArticlePage />
                </Route>
            </Switch>
        </Router>

    );
};

export default App;