import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/sign-up" component={SignUpPage} />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;