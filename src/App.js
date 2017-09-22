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
      text: '',
      playlist: [{
        "User": "Christian",
        "ArtistorBand": "Widespread Panic",
        "Song": "Coconuts",
        "Notes": "Song about coconuts",
        "favorite": false,
      }, {
        "User": "Christian",
        "ArtistorBand": "Blitzen Trapper",
        "Song": "Furr",
        "Notes": "Let out your inner Animal",
        "favorite": true,
      },
      {
        "User": "Pluck em '92",
        "ArtistorBand": "Shovels & Rope",
        "Song": "Birmingham",
        "Notes": "A pair of Charleston natives",
        "favorite": false,
      },]
    }
  }
  //add a new song to the playlist
  addNewItem(user, artist, song, notes){
    //create a new item to be pushed into the array
    let item = {
      "User": user,
      "ArtistorBand": artist,
      "Song": song,
      "Notes": notes,
      "favorite": false,
    }
    //create a copy of the playlist in its current state.
    let updatedList = this.state.playlist.slice();
        //push the new item to the updated playlist
        updatedList.push(item);
        //update the state of the current playlist with the new playlist
        this.setState({
          playlist: updatedList
        });
  }
//toggle the favorite star by receiving the index of the item which was
//clicked then updating the state of that indexed item
  toggleFavorite(index){ //
    let clickedSong = this.state.playlist[index];//shortened

    //slice the element that we want to edit out of the array
    let updatedSong = this.state.playlist.slice(index, index + 1)
    //update the favorite value of that sliced element
    if (updatedSong[0].favorite === false){
        updatedSong[0].favorite = true;

    } else if (updatedSong[0].favorite===true){
        updatedSong[0].favorite = false;
    }
    let switchedSong = this.state.playlist.slice();
    //set the new updated playlist as the state
    this.setState({
      playlist: switchedSong
    })
  }

  // pull up the text that is typed into the searchbox and
  //set it as the state of the text
  handleSearch(event){
    this.setState({
      text: event,
    })
    console.log(this.state.text)
  }

  render() {

    let playlistItems = this.state.playlist.map(items => items );
    //if the search bar is empty, display all the songs
    if (this.state.text === ''){
      return(
        <div className="App">
          <div className="App-header">
          </div>
          <div>
            <Navbar />
          </div>

          <div className="main">
            <PlaylistForm playlist={playlistItems} add={(user, artist, song, notes) => this.addNewItem(user, artist, song, notes)}/>
            <Playlist items={playlistItems}
            toggleStar={index=> this.toggleFavorite(index)}
            handleSearch={event => this.handleSearch(event)}/>
          </div>
          </div>
      )
    } else {
      //if there is any text in the search box, display songs which include
      //that text
      let playlistItems = this.state.playlist.filter(item => item.Song.includes( this.state.text)).map(items => items);

      return (
        <div className="App">
          <div className="App-header">
          </div>
          <div>
            <Navbar />
          </div>

          <div className="main">
            <PlaylistForm playlist={playlistItems} add={(user, artist, song, notes) => this.addNewItem(user, artist, song, notes)}/>

            <Playlist items={playlistItems}
            toggleStar={ index => this.toggleFavorite(index)}
            handleSearch={event => this.handleSearch(event)}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
