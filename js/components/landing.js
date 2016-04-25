import React, {Component} from 'react'

export default class Landing extends Component {
  render(){
    return (
      <div className="landing">
        <h1>CapsuleJS</h1>
        <h2>Interactive wrappers for React Components.</h2>
        <a href="https://github.com/capsuleJS/capsule-components" target="_blank" className="center">
          Source on Github
        </a>
        <p className="landing-about">These interactive examples show you how to use Capsule Components to
          build interactive UI components and features for your application. You
          can start using these components in your code right away, or customize them
          to your heart's desire.
        </p>
        <div className="thumbnails">
          <div className="thumbnail"></div>
          <div className="thumbnail"></div>
        </div>
      </div>
    )
  }
}
