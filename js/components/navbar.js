import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NavBar extends Component {
  render(){
    return (
      <div className="navbar">
        <div className="nav-header">
          <i className="icon ion-ios-flower"></i>
          <p className="byline-header">CapsuleJS</p>
          <p className="byline-by">by</p>
          <p className="byline-names">
            <a href="https://github.com/jpranaymartin" target="_blank">Joseph Martin</a> & <a href="https://github.com/kaushiksahoo2000" target="_blank">Kaushik Sahoo</a>
          </p>
        </div>
        <div className="links-container">
          <ul>
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><Link to="example">SwipeCard</Link></li>
            <li className="list-item"><Link to="example">HoldToTrigger</Link></li>
            <li className="list-item"><Link to="example">PullMeDown</Link></li>
            <li className="list-item"><Link to="example">TapCounter</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
