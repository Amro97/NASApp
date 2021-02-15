import React from 'react';
import { useLocation } from "react-router-dom";
import { CardMedia} from '@material-ui/core';
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

function Media(props){
    const location = useLocation()

    const checkLocation = () => location.pathname === '' || location.pathname.length > 12

    const info = props.info

    return (
        <div>
            {info &&
                <div className="video-wrapper">
                    <p>{info.title}</p>
                    {checkLocation() && <p height='100%' width='100%'>{info.description}</p>}
                    {!checkLocation() && <div>{info.media_type === 'video' ? <ReactPlayer url={info.href} />
                        : <CardMedia><Popup trigger={<img src={info.href} />}><p>{info.description}</p></Popup></CardMedia>}</div>}
                </div>}
        </div>);
}

export default Media;