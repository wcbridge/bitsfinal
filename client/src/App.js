import React from "react";
import Hours from "./pages/Hours";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";


const App = () => (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Hours} />
          <Route exact path="/books" component={Hours} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );


export default App;
