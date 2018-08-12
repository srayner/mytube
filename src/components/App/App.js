import React, { Component } from 'react';
import logo from './logo-dark.png';
import './App.css';
import apiKey from '../../apiKey';
import axios from 'axios';
import VideoList from '../VideoList/VideoList';
import Player from '../Player/Player';
import SearchBox from '../SearchBox/SearchBox';
import { connect } from 'react-redux';

class App extends Component {

    searchUrl = 'https://www.googleapis.com/youtube/v3';
    videoPlayerUrl = 'https://www.youtube.com/embed/';
    
    buildList = (response) => {
        var items = response.data.items.map(item => {
            return {
                'id': item.id,
                'thumb': item.snippet.thumbnails.default.url,
                'title': item.snippet.title,
                'channel': item.snippet.channelTitle,
                'published': item.snippet.publishedAt,
                'stats': item.statistics
            };
        });
        this.props.updateList(items);
    }

    getVideos = (videoIds) => {
        axios.get(this.searchUrl + '/videos', {
            params: {
                key: apiKey,
                part: 'snippet, statistics',
                id: videoIds.join(','),
                maxResults: 25
            }
        })
        .then(response => {
            this.buildList(response);
        });

    }
    searchHandler = (text) => {
        axios.get(this.searchUrl + '/search', {
            params: {
                key: apiKey,
                part: 'snippet',
                type: 'video',
                q: text,
                maxResults: 25
            }
        })
        .then(response => {
            var videoIds = response.data.items.map(item => {
                return item.id.videoId;
            });
            this.getVideos(videoIds);
        });
    }

    componentDidMount() {
        axios.get(this.searchUrl + '/videos', {
            params: {
                key: apiKey,
                part: 'snippet,statistics',
                chart: 'mostPopular',
                maxResults: 25
            }
        })
        .then(response => {
            this.buildList(response);
        })
    }

    render() {
        console.log(this.props.items);
        const currentSrc = this.videoPlayerUrl + this.props.video.currentId;
        return (
            <div className="App">
                <header>
                    <div>
                        <img src={logo} className="logo" alt="logo" />
                        <SearchBox onSubmit={this.searchHandler}/>
                    </div>
                    <Player src={currentSrc}/>
                </header>
                <main>
                    <VideoList items={this.props.video.items} onClick={this.props.setCurrentId}/>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        video: state.video,
        playlist: state.playlist
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateList: (items) => {
            dispatch({
                type: 'VIDEO_UPDATE_LIST',
                payload: items
            });
        },
        setCurrentId: (id) => {
            dispatch({
                type: 'VIDEO_SET_CURRENT_ID',
                payload: id
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
