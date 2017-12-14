import React from "react";
import Articles from "./pages/Articles";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route component={NoMatch}/>
        </Switch>
    </div>
  </Router>;

export default App;
