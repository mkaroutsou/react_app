import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/post/:id">
                    <ArticlePage />
                </Route>
                <Route path="/category/:tag">
                    <CategoryPage />
                </Route>
            </Switch>
        </Router>

    );
};

export default App;