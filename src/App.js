import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    items: []
  }

  componentDidMount() {
      const url = 'https://www.googleapis.com/youtube/v3';

      axios.get(url + '/videos', {
        params: {
          key: 'you_key_goes_here',
          part: 'snippet',
          chart: 'mostPopular'
        }
      })
      .then(function (response) {
        var items = response.data.items.map(item => {
          return {
            'key': item.id,
            'description': item.snippet.description
          };
          this.setState({items: items});
        });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
