import React, { Component } from 'react';

//import playlist item
import PlaylistItem from './PlaylistItem';
import SearchBar from './SearchBar';


class Playlist extends Component {
  //pass the index of the star that is clicked up to app.js
  handleStarClick(index){
    this.props.toggleStar(index)
  }
  //pass the search results from the form to app.js
  handleSearch(event){
    this.props.handleSearch(event);
  }

  render(){

    //Create an individual playlist row for each song in the playlist array
    let items = this.props.items.map((item, index)=> <PlaylistItem key={index} song={item} toggleStar={ () => this.props.toggleStar(index)}/>);


    return(
      <div className="playlistTable">
      <SearchBar handleSearch={event => this.props.handleSearch(event)}/>
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>User</th>
            <th>Artist/Band</th>
            <th>Song</th>
            <th>Notes</th>
          </tr>

          {items}

        </tbody>
      </table>
      </div>
    )
  }
}

export default Playlist;
