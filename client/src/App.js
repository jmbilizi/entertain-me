import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import MoviePage from './pages/MoviePage';
import Celebrities from './pages/Celebrities';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Login from './components/loginSignup/Login';
import Register from './components/loginSignup/Register';
import Logout from './pages/Logout';

const App = () => {
  const [token, setToken] = useState(null);
  const [favorites, setFavorites] = useState([]);
  console.log({ token });
  return (
    <Router>
      <div>
        <NavBar token={token} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movies'>
            <MoviePage favorites={favorites} setFavorites={setFavorites}/>
          </Route>
          <Route exact path='/celebrities'>
            <Celebrities />
          </Route>
          <Route exact path='/profile'>
            <Profile token={token} />
          </Route>
          <Route exact path='/logout'>
            <Logout token={token} setToken={setToken} />
          </Route>
          <Route exact path='/login'>
            <Login setToken={setToken} setFavorites={setFavorites} />
          </Route>
          <Route exact path='/register'>
            <Register token={token} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
