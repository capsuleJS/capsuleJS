import React, {Component} from 'react';

import NavBar from './navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
