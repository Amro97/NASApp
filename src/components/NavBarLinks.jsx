import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import Typography from '@material-ui/core/Typography'

function NavBarLinks() {
    return (
        <Router>
            <Link href="/home">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/favourites">Favourites</Link>
            <Route path='/'/>
            <Route path='/search'/>
            <Route path='/favourites'/>
        </Router>
    );
}

export default NavBarLinks;
