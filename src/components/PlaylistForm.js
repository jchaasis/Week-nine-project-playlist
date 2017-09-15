import React, { Component } from 'react';


class PlaylistForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="PlaylistForm">
        <h3> Add Song </h3>

        <input type="text" placeholder="User Name" />
        <br/>

        <input type="text" placeholder="Artist/Band" />
        <br/>

        <input type="text" placeholder="Song" />
        <br/>

        <input type="text" placeholder="Notes" />
        <br/>

        <button> Add </button>



      </div>
    )
  }

}

export default PlaylistForm;
