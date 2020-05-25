import React from "react";
import { Navbar, Icon, NavItem, Switch } from "react-materialize";
import { Link } from "react-router-dom";
import img from "../../assets/images/logo.png";
import "./style.css";
import {user} from "../../utils/helpers"

const NavBar = (props) => {
  const { token } = props;
  return (
    <div className="navbar-fixed">
      <Navbar
        className="nav-bar grey darken-3"
        alignLinks="right"
        brand={
          <a className="brand-logo" href="/home">
            <img src={img} alt="entertainME" width="235px" height="50px" />
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem>
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/movies">
            Movies / TV Shows
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/celebrities">
            Celebrities
          </Link>
        </NavItem>
        <NavItem>
          {token ? (
            <Link className="nav-link" to={`/user/${user()._id}`}>
              {`${user().fname}'s profile`}
            </Link>
          ) : null}
        </NavItem>
        <NavItem>
          {token ? (
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          ) : null}
        </NavItem>
        <NavItem>
          {!token ? (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          ) : null}
        </NavItem>
        <NavItem></NavItem>
        <span className="material-icons dark">brightness_medium</span>
        <NavItem>
          <Switch
            disabled
            id="Switch-11"
            offLabel="Off"
            onChange={function noRefCheck() {
              alert("dark mode");
            }}
            onLabel="On"
          />
        </NavItem>
      </Navbar>
    </div>
  );
};

export default NavBar;
