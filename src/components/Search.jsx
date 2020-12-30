import React, { Component } from 'react'
import { useState, prevState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import SearchBar from './SearchBar'
import MediaCard from './MediaCard'
const axios = require('axios')

function Search() {
    const [info, setInfo] = useState(null);

    return (
        <div className='search-results'>
            <SearchBar setInfo={setInfo}/>
            {info && info.map(i => <div className='disliked'><MediaCard info={i} /><i class="far fa-thumbs-up"></i></div>)}
        </div>
    );
}

export default Search;