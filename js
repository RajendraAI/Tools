// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          {/* Add more routes */}
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to our Social App!</h1>;
}

function Profile() {
  return <h1>User Profile</h1>;
}

export default App;
