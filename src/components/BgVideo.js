import React from 'react';
import video1 from '../images/video.mp4';
import video2 from '../images/video.webm'

const BgVideo = () => {
    return (
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop >
                <source src={video1} type="video/mp4" />
                <source src={video2} type="video/webm" />
                Your browser is not supported!
            </video>
        </div>
    )
}

export default BgVideo
