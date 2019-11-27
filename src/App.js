import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthProvider from "./providers/AuthProvider"
import {Switch, Router} from 'react-route-dom';

function routes (currentUser) {
  if(!currentUser) {
    return (
      <Switch>
        <Route path="/events"><EventList></EventList></Route>
        <Route path="/login"><Login></Login></Route>
        <Route path="/events/:eventId"><EventDetails></EventDetails></Route>
        <Redirect from="*" to="/events" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/events"><EventList></EventList></Route>
      <Route path="/events/:eventId"><EventDetails></EventDetails></Route>
      <Redirect from="*" to="/events" />
  </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {routes}
      </AuthProvider>
    </div>
  );
}

export default App;
