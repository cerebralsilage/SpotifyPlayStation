
import React from 'react';
import './App.css';
import {SearchBar} from './SearchBar/SearchBar';
import {Playlist} from './Playlist/Playlist';
import {SearchResults} from './SearchResults/SearchResults.js';
import Spotify from '../../util/Spotify';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      playlistName: 'Enter Playlist Name Here',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'Enter Playlist Name Here',
        playlistTracks: []
      })
    })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    })
  }
  
  render() {
    return (
      <div>
        <h1>Spotify<span className="highlight">Play</span>Station</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} 
              searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack} 
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
};

Spotify.getAccessToken();
export default App;
