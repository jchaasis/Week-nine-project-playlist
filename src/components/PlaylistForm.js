import React, { Component } from 'react';

class PlaylistForm extends Component{
  constructor(props){
    super(props);

    this.state= {

      item: {
        "User": '',
        "ArtistorBand": '',
        "Song": '',
        "Notes": ''
      }
    }
  }

   newSong(){
    this.setState({
      item:{
      "User": this.state.name,
      "ArtistorBand": this.state.artist,
      "Song": this.state.song,
      "Notes": this.state.notes
    }
  })
}

  addSong(){
    // this.setState({
    //   this.props.playlist.push(this.state.item);
    // });
  }

  render(){

    return(
      <div className="PlaylistForm">
        <h3> Add Song </h3>
        <input type="text" placeholder="User Name" value = {this.state.User}/>
        <br/>
        <input type="text" placeholder="Artist/Band" value = {this.state.ArtistorBand}/>
        <br/>
        <input type="text" placeholder="Song" value={this.state.Song}/>
        <br/>
        <input type="text" placeholder="Notes" value={this.state.Notes}/>
        <br/>
        <button> Add </button>
      </div>
    )
  }

}

export default PlaylistForm;
