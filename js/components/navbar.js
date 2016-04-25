import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NavBar extends Component {
  render(){
    return (
      <div className="navbar">
        <div className="nav-header">
          Logo & Credits
        </div>
        <div className="links-container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="example">Example</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
