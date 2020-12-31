import MediaCard from './MediaCard'
import { useState, useEffect } from 'react';
const axios = require('axios');

function Home() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://api.nasa.gov/planetary/apod?api_key=OC29LfYgQwvuPpzTcoAXPN0EbfnAOHXoffrvqzDe")
      const data = { title: res.data.title, description: res.data.explanation, media_type: res.data.media_type, href: res.data.url }
      setInfo(data)
    }
    fetchData()
  }, [])

  return (<div>{info && <MediaCard info={info} />}</div>);
}

export default Home;