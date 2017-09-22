import React, { Component } from 'react';

import Star from './Star';
class PlaylistItem extends Component {

  handleStarClick(index){
    this.props.toggleStar(index)
  }

  render() {
    const item = this.props.song
    return(

      <tr>
        <td> <Star fav={item.favorite} onClick={index=>this.handleStarClick(index)}/> </td>
        <td> {item.User} </td>
        <td> {item.ArtistorBand} </td>
        <td> {item.Song} </td>
        <td> {item.Notes} </td>
      </tr>
    )
  }
}

export default PlaylistItem;
