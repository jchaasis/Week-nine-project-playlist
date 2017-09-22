import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }

  handleTyping(e){
    // set the state of the text
    this.setState({
      text: e.target.value,
    })
    //pass the current value of the search to playlist.js then app.js
    this.props.handleSearch(e.target.value);
  }

  render(){
    return(
      <div className="searchbar">
        <input type="text" placeholder="Filter Songs..." value={this.state.text}
        onChange={ e => this.handleTyping(e)}/>
      </div>

    )
  }
}

export default SearchBar;
