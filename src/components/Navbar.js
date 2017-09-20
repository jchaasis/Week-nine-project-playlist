import React, { Component } from 'react';


class Navbar extends Component{
  


  render(){

    return(
      <div>
        <nav className="navBar">
          <ul className="navLinks">
            <li className="navLink"> <p> Home </p> </li>
            <li className="navLink"> <p> Top Rated Playlists </p> </li>
            <li className="navLink"> <p> Logout </p> </li>
          </ul>
        </nav>
      </div>

    )
  }

}

export default Navbar;
