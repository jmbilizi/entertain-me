import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import MoviePage from "./pages/Movies";
import Celebrities from "./pages/Celebrities";
import Profile from "./pages/Profile";
import SiteFooter from "./components/SiteFooter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";


const App = () => {
  const [token, setToken] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [celebrities, setCelebrities] = useState([]);
  const [communityCelebrities, setCommunityCelebrities] = useState([]);
  const [communityFavorites, setCommunityFavorites] = useState([]);
  console.log({ token });


  return (
    <Router>
        <NavBar token={token} />
        <Switch>
          <Route exact path="/">
            <Home 
            token={token}
            />
          </Route>
          <Route exact path="/movies">
            <MoviePage
              favorites={favorites}
              setFavorites={setFavorites}
              token={token}
              communityFavorites={communityFavorites}
              setCommunityFavorites={setCommunityFavorites}
            />
          </Route>
          <Route exact path="/celebrities">
            <Celebrities
              celebrities={celebrities}
              setCelebrities={setCelebrities}
              token={token}
              communityCelebrities={communityCelebrities}
              setCommunityCelebrities={setCommunityCelebrities}
            />
          </Route>
          <Route exact path="/profile">
            <Profile token={token} />
          </Route>
          <Route exact path="/logout">
            <Logout token={token} setToken={setToken} />
          </Route>
          <Route exact path="/login">
            <Login
              setToken={setToken}
              setFavorites={setFavorites}
              setCelebrities={setCelebrities}
              setCommunityCelebrities={setCommunityCelebrities}
              setCommunityFavorites={setCommunityFavorites}
            />
          </Route>
          <Route exact path="/register">
            <Register token={token} />
          </Route>
        </Switch>
        <SiteFooter />
    </Router>
  );
};

export default App;
