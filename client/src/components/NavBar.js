import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';


const Favorites = (props) => {

    const getDetails = () => {
        console.log('favorite movie selected');
    }

    return (
        <>
            <Navbar
                alignLinks="left"
                brand={<a className="brand-logo" href="#">Logo</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="">
                    Home
          </NavItem>
                <NavItem href="">
                    Movies / TV Shows
          </NavItem>
                <NavItem href="">
                    Celebrities
          </NavItem>
                <NavItem href="">
                    My Profile
          </NavItem>
                <NavItem href="">
                    Search
          </NavItem>
            </Navbar>
        </>

    )
}

export default Favorites;