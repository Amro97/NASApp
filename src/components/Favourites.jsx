import React from 'react'
import MediaCard from './MediaCard'
import { useState, useEffect } from 'react';
const axios = require('axios');

function Favourites() {
    const [images, setImages] = useState(null);

    async function fetchImages() {
        const res = await axios.get("http://localhost:1301/images")
        setImages(res.data)
    }

    useEffect(() => {
        fetchImages()
    }, [])

    async function handleClick(id) {
        await axios.delete(`http://localhost:1301/image/${id}`)
        fetchImages()
    }

    return (
        <div className='favourites'>
            {images && images.map(i => <div key={i._id} className='liked'><MediaCard info={i} /><i className="far fa-thumbs-down" onClick={() => handleClick(i._id)}></i></div>)}
        </div>
    );
}

export default Favourites;