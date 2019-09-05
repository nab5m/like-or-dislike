import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import FriendsPage from "../pages/FriendsPage";
import TimeLinePage from "../pages/TimeLinePage";
import NotificationsPage from "../pages/NotificationsPage";
import SettingsPage from "../pages/SettingsPage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/sign-up" component={SignUpPage} />

                    <Route exact path="/home" component={HomePage} />

                    <Route exact path="/profile" component={ProfilePage} />
                    <Route exact path="/friends" component={FriendsPage} />
                    <Route exact path="/time-line" component={TimeLinePage} />
                    <Route exact path="/notifications" component={NotificationsPage} />
                    <Route exact path="/settings" component={SettingsPage} />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;