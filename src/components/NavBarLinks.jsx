import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { BottomNavigation } from '@material-ui/core';

function NavBarLinks() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/favourites">Favourites</Link>
        </div>
    );
}

export default NavBarLinks;
