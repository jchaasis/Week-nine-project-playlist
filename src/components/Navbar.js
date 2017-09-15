import React, { Component } from 'react';


class Navbar extends Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      <nav>
        <ul>
          <li> <p> Home </p> </li>
          <li> <p> Top Rated Playlists </p> </li>
          <li> <p> Concerts </p> </li>
        </ul>

    )
  }

}

export default Navbar;
