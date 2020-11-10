import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/dashboard">
          <DashBoard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/404">
          <NoMatch />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}
export default App;

function NoMatch() {
  return (
    <div>
      <h2>Page not found</h2>
    </div>
  );
}
