import React, { Component } from 'react'

export class Message extends Component {
    constructor() {
      super()
    
      this.state = {
         message:'Welcome to Visitor'
      }
    }
    changeMessage(){
        this.setState({
            message:'Thank You for Subscribing'
        })
    }
  render() {
    return (
      <div>
        <center>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </center>
      </div>
    )
  }
}

export default Message