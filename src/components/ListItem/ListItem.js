import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    const published = new Date(props.item.published).toLocaleDateString('en-GB',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    console.log(published);

    return (
        <article>
            <img src={props.item.thumb} alt={props.item.alt}/>
            <div>
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
                <span className="channel">{props.item.channel}</span>
                <span className="published">{published}</span>
            </div>
        </article>
    );
}

export default ListItem;