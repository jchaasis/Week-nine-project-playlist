import React, { Component } from 'react';

class PlaylistForm extends Component{
  constructor(props){
    super(props);

    this.state = {
        user: '',
        artist: '',
        song: '',
        notes: ''

    }
  }
//store the form input in the state so that we can then pass it
//up through parameters. TODO: compile these functions into one?
  handleUser(e){
    //set the state of the user
    this.setState({
      user: e.target.value,
    });
  }

  handleArtist(e){
    //set the state of the artist
    this.setState({
      artist: e.target.value,
    });
  }

  handleSong(e){
    //set the state of the song
    this.setState({
      song: e.target.value,
    });
  }

  handleNotes(e){
    //set the state of the notes
    this.setState({
      notes: e.target.value,
    });
  }
  ////another TODO: clear out the input fields when you click the add button.

  handleAddSong(){
    this.props.add(this.state.user, this.state.artist, this.state.song, this.state.notes)
    this.setState({
      user: '',
      artist: '',
      song: '',
      notes: '',
    })
  }

  render(){

    return(
      <div className="PlaylistForm">
        <h3 className="formTitle"> Add Song </h3>
        <input type="text" placeholder="User Name" value = {this.state.User}
        onChange={e => this.handleUser(e)}/>
        <br/>
        <input type="text" placeholder="Artist/Band" value = {this.state.ArtistorBand}
        onChange={e => this.handleArtist(e)}/>
        <br/>
        <input type="text" placeholder="Song" value={this.state.Song}
        onChange={e => this.handleSong(e)}/>
        <br/>
        <input type="text" placeholder="Notes" value={this.state.Notes}
        onChange={e => this.handleNotes(e)}/>
        <br/>
        <button className="formButton" onClick={() => this.handleAddSong()}> Add </button>
      </div>
    )
  }
}

export default PlaylistForm;
