import React from "react";
import { Navbar, Icon, NavItem, TextInput } from "react-materialize";

const NavBar = () => {
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
        <NavItem>Home</NavItem>
        <NavItem>Movies / TV Shows</NavItem>
        <NavItem>Celebrities</NavItem>
        <NavItem>My Profile</NavItem>
        {/* <NavItem>
                    <TextInput
                        placeholder="Search"
                        inputClassName='nav-search'
                    />
                </NavItem> */}
      </Navbar>
    </>
  );
};

export default NavBar;
