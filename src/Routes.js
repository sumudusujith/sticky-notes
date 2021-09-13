import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./newComponents/App";

//import NotesAdd from "./newComponents/NotesAdd";
import { ROUTES } from "./routesClass";


export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path={ROUTES.ROUTE_TO_NOTES_ADD} component={NotesAdd} /> */}
           <Route exact path={ROUTES.ROUTE_TO_NOTES_ADD} component={App} /> 
          <Redirect exact from="/" to="/notesadd" />
        </Switch>
      </Router>
    </div>
  );
};

