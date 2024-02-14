import React, { Component } from 'react'

export class Greet extends Component {
  render() {
    return (
      <div><center><h2>Welcome to Class Components {this.props.name}</h2></center></div>
    )
  }
}

export default Greet