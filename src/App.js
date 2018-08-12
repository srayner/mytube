import React, { Component } from 'react';
import logo from './logo-dark.png';
import './App.css';
import axios from 'axios';

import VideoList from './components/VideoList/VideoList';
import apiKey from './apiKey';
import Player from './components/Player/Player';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {

    searchUrl = 'https://www.googleapis.com/youtube/v3';
    videoPlayerUrl = 'https://www.youtube.com/embed/';
    state = {
        currentSrc: null,
        items: []
    }

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
        var currentSrc = this.videoPlayerUrl + items[0].id;
        this.setState({
            currentSrc: currentSrc,
            items: items
        });
    }

    clickHandler = (item) => {
        this.setState({currentSrc: this.videoPlayerUrl + item.id});
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
            console.log(videoIds);

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
        return (
            <div className="App">
                <header>
                    <div>
                        <img src={logo} className="logo" alt="logo" />
                        <SearchBox onSubmit={this.searchHandler}/>
                    </div>
                    <Player src={this.state.currentSrc}/>
                </header>
                <main>
                    <VideoList items={this.state.items} onClick={this.clickHandler}/>
                </main>
            </div>
        );
    }
}

export default App;
