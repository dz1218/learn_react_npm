import React, { Component } from "react"

export class AClass extends Component {
  constructor() {
    super()
    this.state = {
      message: "hello,戴卓"
    }
  }
  render() {
    return <div>AClass</div>
  }
}

export default AClass
