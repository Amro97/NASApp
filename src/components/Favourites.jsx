import React, { Component } from 'react'
import MediaCard from './MediaCard'
import { useState, prevState, useEffect } from 'react';
const axios = require('axios');

function Favourites() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        async function fetchImages() {
            const res = await axios.get("http://localhost:1301/images")
            setImages(res.data)
        }
        fetchImages()
    }, [])

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div className='favourites'>
            {images && images.map(i => <div className='liked'><MediaCard info={i} /><i class="far fa-thumbs-down" onClick={()=>handleClick(i._id)}></i></div>)}
        </div>
    );
}

export default Favourites;