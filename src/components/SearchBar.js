import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }

  handleTyping(e){
    //set the state of the
    this.setState({
      text: e.target.value,
    })


  }

  handleSearch(){


  }

  render(){
    return(
      <div className="searchbar">
        <input type="text" placeholder="Search Playlist" value={this.state.text}
        onChange={ e => this.handleTyping(e)}/>
        <button onClick={()=>this.handleSearch()}> Search </button>
      </div>

    )
  }
}

export default SearchBar;
