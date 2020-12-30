import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import Favourites from './Favourites'

function Container() {
    return (
        <div>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/search' exact render={() => <Search />} />
            <Route path='/favourites' exact render={() => <Favourites />} />
        </div>
    );
}

export default Container;