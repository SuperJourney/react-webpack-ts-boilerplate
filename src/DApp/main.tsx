import React, { Component } from 'react'
import Navbar from "./pages/navbar"


import "../scss/index.scss"


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
      </div>
    )
  }
}
