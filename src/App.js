import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';

import VideoList from './components/VideoList/VideoList';
import apiKey from './apiKey';

class App extends Component {

    state = {
      items: []
    }

    componentDidMount() {
        const url = 'https://www.googleapis.com/youtube/v3';

        axios.get(url + '/videos', {
            params: {
                key: apiKey,
                part: 'snippet',
                chart: 'mostPopular'
            }
        })
        .then(response => {
            var items = response.data.items.map(item => {
                return {
                    'key': item.id,
                    'thumb': item.snippet.thumbnails.standard.url,
                    'title': item.snippet.title,
                    'channel': item.snippet.channelTitle,
                    'published': item.snippet.publishedAt
                };
            });
            this.setState({items: items});
        })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <img src={logo} className="logo" alt="logo" />
                </header>
                <main>
                    <VideoList items={this.state.items} />
                </main>
            </div>
        );
    }
}

export default App;
