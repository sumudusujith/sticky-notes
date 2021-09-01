import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import AddNoteForm from "./components/notes";

export const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path={"/notes"} component={AddNoteForm} />
                    <Redirect exact from="/" to="/notes" />
                </Switch>
            </Router>
        </div>

    );


};