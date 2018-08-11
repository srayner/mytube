

import React from 'react';

const Player = (props) => {
    return (
        <iframe
            title="Player"
            width="560"
            height="315"
            src={props.src}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    );
}

export default Player;


