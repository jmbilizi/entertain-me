import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { token } = props;
  return (
    <>
      <Navbar
        className="red"
        alignLinks="right"
        brand={
          <a className="brand-logo" href="#">
            entertainME
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
            <Link className="nav-link" to="/profile">
              My Profile
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
      </Navbar>
    </>
  );
};

export default NavBar;
