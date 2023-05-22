import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import "./NavBar.scss"

interface IState {
  show: boolean
}
export default class NavBar extends Component<any, IState>  {
  state = {
    show: true
  }
  handleToggleShow = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };


  render(): React.ReactNode {
    const { show } = this.state
    return <div className='container'>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <div className='label'>LOGO</div>
          <div className='nav-toggle-btn'>
            <button onClick={this.handleToggleShow}>==</button>
          </div>
        </div>
        <ul className={`navbar-item ${show ? 'show' : ''}`}>
          <li><Link to={'chat'} >CHATGPT</Link></li>
          <li><Link to={'co1'} >COUNT1</Link></li>
          <li><Link to={'co2'} >COUNT2</Link></li>
          <li>
            12
            <ul>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
            </ul>
          </li>
          <li>12</li>
          <li>12</li>
        </ul>
      </nav>
    </div>
  }
}
