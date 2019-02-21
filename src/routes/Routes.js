import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import WelcomeScreen from "../screens/WelcomeScreen";
import QuizScreen from "../screens/QuizScreens";
import ResultScreen from "../screens/ResultScreen";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomeScreen} />
      <Route path="/welcome" component={WelcomeScreen} />
      <Route path="/quiz" component={QuizScreen} />
      <Route path="/result" component={ResultScreen} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
