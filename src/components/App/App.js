import React, { Component } from 'react';
import logo from './logo-dark.png';
import './App.css';
import VideoList from '../VideoList/VideoList';
import Player from '../Player/Player';
import SearchBox from '../SearchBox/SearchBox';
import { connect } from 'react-redux';
import { updateList, setCurrentId, getPopularVideos, searchVideos } from '../../actions/videoActions';
import youtube from '../../library/youtube';

class App extends Component {

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
        youtube.getVideos(videoIds).then(response => {
            this.buildList(response);
        });
    }

    searchHandler = (text) => {
        this.props.searchVideos(text);
    }

    componentDidMount() {
        this.props.getPopularVideos();
    }

    render() {
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
        updateList: (items) => dispatch(updateList(items)),
        setCurrentId: (id) => dispatch(setCurrentId(id)),
        getPopularVideos: (response) => dispatch(getPopularVideos(response)),
        searchVideos: (text) => dispatch(searchVideos(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
