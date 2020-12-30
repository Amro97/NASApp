import React, { Component } from 'react';
import { useState, prevState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { CardMedia, Icon } from '@material-ui/core';
import ReactPlayer from 'react-player'
const axios = require('axios');



export default (props) => {
    

    const location = useLocation()

    const checkLocation = () => location.pathname === '/' || location.pathname.length > 12


    const info = props.info
    return (
        <div>
            {info && 
            <div className="video-wrapper">
                <p>{info.title}</p>
                {checkLocation() && <p height='100%' width='100%'>{info.description}</p> } 
                <p>{info.media_type === 'video' ? <ReactPlayer url={info.href} /> : <CardMedia><img src={info.href}/></CardMedia>}</p>
            </div>}
        </div>);
}

