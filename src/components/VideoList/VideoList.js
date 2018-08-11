import React from 'react';
import './VideoList.css';
import ListItem from '../ListItem/ListItem';

const VideoList = (props) => {

    const items = props.items.map(item => {
        return <ListItem key={item.id} item={item} onClick={props.onClick}/>   
    })
 
    return <div className="VideoList">{items}</div>;
}

export default VideoList;