import React, { Component } from 'react';

class PlaylistItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
    this.props.song

  return(
    <tr>
      <td> {this.props.song.User}</td>
      <td> {this.props.song.ArtistorBand}</td>
      <td> {this.props.song.Song} </td>
      <td> {this.props.song.Notes}</td>
    </tr>
  )

  }
}

export default PlaylistItem;
