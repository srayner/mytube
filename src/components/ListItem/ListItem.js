import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    const published = new Date(props.item.published).toLocaleDateString('en-GB',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    const viewCount = props.item.stats.viewCount;
    let views = viewCount + 'views';
    if (viewCount > 1000) {
        views = (viewCount / 1000).toFixed(1) + 'K views'
    }
    if (viewCount > 1000000) {
        views = (viewCount / 1000000).toFixed(1) + 'M views'
    }
    if (viewCount > 1000000000) {
        views = (viewCount / 1000000000).toFixed(1) + 'B views'
    }
    return (
        <article onClick={() => props.onClick(props.item)}>
            <img src={props.item.thumb} alt={props.item.alt}/>
            <div>
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
                <span className="channel">{props.item.channel}</span>
                <span className="published">{published}</span>
                <span className="views">{views}</span>
            </div>
        </article>
    );
}

export default ListItem;