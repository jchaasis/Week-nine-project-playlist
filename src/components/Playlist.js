import React, { Component } from 'react';

//import playlist item
import PlaylistItem from './PlaylistItem';


class Playlist extends Component {
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



  render(){

    return(
      <div className="playlistTable">
      <table>
        <tbody>
          <tr>
            <th>User</th>
            <th>Artist/Band</th>
            <th>Song</th>
            <th>Notes</th>
          </tr>
          <PlaylistItem song={this.state.playlist[1]}/>
        </tbody>
      </table>

      </div>
    )
  }
}

export default Playlist;
