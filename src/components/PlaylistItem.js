import React, { Component } from 'react';

class PlaylistItem extends Component {

  render() {
    console.log(this.props.song);

    return(

      <tr>
        <td> {this.props.song.props.songs.User} </td>
        <td> {this.props.song.props.songs.ArtistorBand} </td>
        <td> {this.props.song.props.songs.Song} </td>
        <td> {this.props.song.props.songs.Notes} </td>
      </tr>

    )

  }
}

export default PlaylistItem;
