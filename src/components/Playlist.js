import React, { Component } from 'react';

//import playlist item
import PlaylistItem from './PlaylistItem';
import SearchBar from './SearchBar';


class Playlist extends Component {

  render(){

    let items = this.props.items.map((item, index )=> <PlaylistItem key={index} song={item} />);

    console.log(items);

    return(
      <div className="playlistTable">
      <SearchBar />
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
