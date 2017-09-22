import React, { Component } from 'react';

class Star extends Component {


  //when we click a star, it will switch between empty and filled
  handleMouseClick(){
    this.props.onClick(this.props.fav)
  }

  render(){
    // console.log(this.props.fav)
    if (this.props.fav === false){
      return(
        <span className="star" onClick={event=> this.handleMouseClick()} > &#9734; </span>
      )
    }

    if (this.props.fav === true){
      return(
        <span className="star" onClick={event=> this.handleMouseClick()}> &#9733; </span>
      )
    }
  }

}

export default Star;
      //
