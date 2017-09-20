import React, { Component } from 'react';



class Star extends Component {
  constructor(props){
    super(props);

    this.state = {

      value:false,
    }
  }

  //when we click a star, it will switch between empty and filled
  handleMouseClick(){
    if (this.state.value===true){
      this.setState({
        value: false
      });
    } else {
      this.setState({
        value: true
      })
    }

  }

  render(){
    if (this.state.value === false){
      return(
        <span className="star" onClick={event=> this.handleMouseClick()} > &#9734; </span>
      )
    }

    if (this.state.value === true){
      return(
        <span className="star" onClick={event=> this.handleMouseClick()}> &#9733; </span>
      )
    }
  }

}

export default Star;
      //
