

import React from 'react';

const Player = (props) => {
    return (
        <iframe
            title="Player"
            width="560"
            height="315"
            src={props.src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen>
        </iframe>
    );
}

export default Player;


