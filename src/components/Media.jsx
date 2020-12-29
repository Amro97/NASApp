import React, { Component } from 'react';
import { useState, prevState, useEffect } from 'react';
import { CardMedia } from '@material-ui/core';
import ReactPlayer from 'react-player'
const axios = require('axios');



// // Render a YouTube video player
// <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />


export default () => {
    const [info, setInfo] = useState(null);
    //, info.explanation, info.url, info.media_type

    useEffect(async () => {
        const res = await axios.get("https://api.nasa.gov/planetary/apod?api_key=OC29LfYgQwvuPpzTcoAXPN0EbfnAOHXoffrvqzDe")
        const data = await res.data
        setInfo(data)
    }, [])

    return (
        <div>
            {info && <div> 
                <p>{info.title}</p>
                <p>{info.explanation}</p>
                <p>{info.media_type}</p>
                <p><ReactPlayer url={info.url}/></p>
                <p><CardMedia><img src='https://www.w3schools.com/images/lamp.jpg' alt="recipe thumbnail"/></CardMedia></p>
                </div>}
        </div>);
}

