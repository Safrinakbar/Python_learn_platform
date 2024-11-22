import React from 'react';
import YouTube from 'react-youtube';

const VariablesVideo = () => {
    const onReady = (event) => {
        event.target.pauseVideo(); // Optional: control the video
    };

    return (
        <div>
            <h1>Variables - Video Tutorial</h1>
            <YouTube videoId="m67-bOpOoPU" onReady={onReady} />
        </div>
    );
};

export default VariablesVideo;
