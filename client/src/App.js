import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css';
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import MoviePage from "./pages/MoviePage";
import Celebrities from "./pages/Celebrities";
import Profile from "./pages/Profile";
import Footer from "./components/Footer"


const App = () => {


  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <MoviePage />
          </Route>
          <Route exact path="/celebrities">
            <Celebrities />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
};

export default App;
