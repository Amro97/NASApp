import React, { useState } from 'react'
import SearchBar from './SearchBar'
import MediaCard from './MediaCard'
const axios = require('axios')

function Search() {
    const [info, setInfo] = useState(null);

    async function handleClick(data) {
        await axios.post("http://localhost:1301/image", data)
    }

    return (
        <div className='search-results'>
            <SearchBar setInfo={setInfo} />
            {info && info.map(i => <div key={i.href} className='disliked'><MediaCard info={i} /><i className="far fa-thumbs-up" onClick={() => handleClick(i)}></i></div>)}
        </div>
    );
}

export default Search;