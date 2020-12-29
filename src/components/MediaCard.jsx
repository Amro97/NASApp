const axios = require('axios');
import Media from './Media'

//import { CardMedia } from '@material-ui/core';

//https://api.nasa.gov/planetary/apod?api_key=OC29LfYgQwvuPpzTcoAXPN0EbfnAOHXoffrvqzDe
//title
//explanation
//media_type
//url

// import React from 'react'
// import ReactPlayer from 'react-player'

// // Render a YouTube video player
// <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
function MediaCard() {
  return (
    <Media/>
  );
}

export default MediaCard;