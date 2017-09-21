import React, { Component } from 'react';
import './styles/App.css';

//import components
import Navbar from './components/Navbar';
import PlaylistForm from './components/PlaylistForm';
import Playlist from './components/Playlist';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      playlist: [{
        "User": "Christian",
        "ArtistorBand": "Widespread Panic",
        "Song": "Coconuts",
        "Notes": "Song about coconuts"
      }, {
        "User": "Christian",
        "ArtistorBand": "Blitzen Trapper",
        "Song": "Furr",
        "Notes": "Let out your inner Animal"
      },
      {
        "User": "Pluck em '92",
        "ArtistorBand": "Shovels & Rope",
        "Song": "Birmingham",
        "Notes": "A pair of Charleston natives"
      },]
    }
  }

  addNewItem(user, artist, song, notes){
    let item = {
      "User": user,
      "ArtistorBand": artist,
      "Song": song,
      "Notes": notes
    }
    this.state.playlist.push(item);
    console.log(this.state.playlist);
  }


  render() {

    let playlistItems = this.state.playlist.map(items => <Playlist songs={items} />)

    return (
      <div className="App">
        <div className="App-header">

        </div>
        <div>
          <Navbar />
        </div>
        <div className="main">
          <PlaylistForm playlist={playlistItems} add={(user, artist, song, notes) => this.addNewItem(user, artist, song, notes)}/>

          <Playlist items={playlistItems} />

        </div>

      </div>
    );
  }
}

export default App;
