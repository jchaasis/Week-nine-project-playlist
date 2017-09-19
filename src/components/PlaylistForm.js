import React, { Component } from 'react';

class PlaylistForm extends Component{
  constructor(props){
    super(props);

    this.state= {
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
      },],

      item: {
        "User": '',
        "ArtistorBand": '',
        "Song": '',
        "Notes": ''
      }
    }
  }
//
//    newSong(){
//     this.setState{
//       item:{
//       "User": this.state.name,
//       "ArtistorBand": this.state.artist,
//       "Song": this.state.song,
//       "Notes": this.state.notes
//     }
//   }
// }
//
//   addSong(){
//     this.setState({
//       playlist.push(newSong);
//     });
//   }

  render(){

    return(
      <div className="PlaylistForm">
        <h3> Add Song </h3>
        <input type="text" placeholder="User Name" value = {this.state.name}/>
        <br/>
        <input type="text" placeholder="Artist/Band" />
        <br/>
        <input type="text" placeholder="Song" />
        <br/>
        <input type="text" placeholder="Notes" />
        <br/>
        <button> Add </button>
      </div>
    )
  }

}

export default PlaylistForm;
