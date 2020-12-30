import React, { Component } from 'react'
import { useState, prevState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import MediaCard from './MediaCard'
const axios = require('axios')

function SearchBar(props) {
    const [value, setValue] = useState("")

    const handleData = async (data) => {
        let dataArr = []
        await data.forEach(d => {
            if (d.links && d.data) {
                let temp = { href: d.links[0].href, title: d.data[0].title, description: d.data[0].description, media_type: d.data[0].media_type }
                console.log(temp)
                dataArr.push(temp)
            }
        })
        return dataArr
    }

    const handleClick = async () => {
        const res = await axios.get(`https://images-api.nasa.gov/search?q=${value}`)
        const results = await handleData(res.data.collection.items)
        props.setInfo(results)
    }

    const handleInput = (e) => {
        const searchWord = e.target.value
        setValue(searchWord)
    }

    return (
        <div className='search-results'>
            <TextField onChange={handleInput} id="outlined-basic" label="Search Space" variant="outlined" />
            <Button onClick={handleClick} variant="outlined" color="secondary">Search</Button>
        </div>
    );
}

export default SearchBar;