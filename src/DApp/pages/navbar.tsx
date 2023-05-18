import React, { Component } from 'react'
import { useState } from 'react';

import "./NavBar.scss"


export default class NavBar extends Component {
  // const [toggleStatus,setToggleStatus] = useState(0);
  render(): React.ReactNode {
    return <div className='container'>
      <nav className='navbar'>
          <div className='navbar-brand'>
            <div className='label'>LOGO</div>
            <div className='nav-toggle'>
              <button>==</button>
            </div>
          </div>
          <ul className='navbar-item toggle'>
            <li>12</li>
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
            <li>12</li>
          </ul>
        </nav>
    </div>
  }
}
