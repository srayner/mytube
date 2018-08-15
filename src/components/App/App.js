import React, { Component } from "react";
import logo from "./logo-dark.png";
import "./App.css";
import VideoList from "../VideoList/VideoList";
import Player from "../Player/Player";
import SearchBox from "../SearchBox/SearchBox";
import DropdownList from "../DropdownList/DropdownList";
import { connect } from "react-redux";
import {
  setCurrentId,
  getPopularVideos,
  searchVideos,
  getCategories
} from "../../actions/videoActions";

class App extends Component {
  searchHandler = text => {
    this.props.searchVideos(text);
  };

  componentDidMount() {
    this.props.getPopularVideos();
    this.props.getCategories();
  }

  render() {
    console.log("vid categores", this.props.video.categories);
    return (
      <div className="App">
        <header>
          <div>
            <img src={logo} className="logo" alt="logo" />
            <SearchBox onSubmit={this.searchHandler} />
            <DropdownList items={this.props.video.categories} />
          </div>
          <Player videoId={this.props.video.currentId} />
        </header>
        <main>
          <VideoList
            items={this.props.video.items}
            onClick={this.props.setCurrentId}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    video: state.video,
    playlist: state.playlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentId: id => dispatch(setCurrentId(id)),
    getPopularVideos: response => dispatch(getPopularVideos(response)),
    searchVideos: text => dispatch(searchVideos(text)),
    getCategories: text => dispatch(getCategories(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
