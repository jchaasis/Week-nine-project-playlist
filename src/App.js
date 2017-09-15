import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

//import components
import Navbar from './components/Navbar';
import PlaylistForm from './components/PlaylistForm';
import Playlist from './components/Playlist';

class App extends Component {
  constructor(props){
    super(props);

    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <div>
          <Navbar />
        </div>
        <div className="main">
          <PlaylistForm />
          <Playlist />

        </div>

      </div>
    );
  }
}

export default App;
