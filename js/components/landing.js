import React, {Component} from 'react'

import SwipeCard from './showcase_components/swipe_card'
import HoldToTrigger, {Reactor} from './showcase_components/hold_to_trigger'
import PullToRefresh from './showcase_components/pull_to_refresh'
import PullToRefreshLoading from './showcase_components/pull_to_refresh_loading'
import GameCounter from './showcase_components/tap_counter'
import TapCounter from './showcase_components/tap_counter'


export default class Landing extends Component {
  render(){
    return (
      <div className="landing">
        <h1>CapsuleJS</h1>
        <h2>Interactive wrappers for React Components.</h2>
        <a href="https://github.com/capsuleJS/capsule-components" target="_blank" className="center-button">
          <i className="icon ion-social-github"></i> Source on Github
        </a>
        <pre className="install-code"><mark className="mark-class">npm i capsule-components</mark></pre>
        <p className="landing-about">These examples show you how to use Capsule Components to
          build UI components and interactive features for your application. You
          can start using these components in your code right away, or customize them
          to your heart's content.
        </p>
        <div className="thumbnails">
          <div className="thumbnail">
            <SwipeCard>
              <div className="thumbnail-instruction">Drag Me!</div>
            </SwipeCard>
          </div>
          <div className="thumbnail">
            <HoldToTrigger wait={2000} auto={true}>
              <Reactor/>
              <div className="thumbnail-instruction" style={{
                borderRadius: '8px',
                width: "100%",
                height: "100%",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#b8b8b8',
                boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.16)",
              }}>
              Hold Me!
            </div>
            </HoldToTrigger>
          </div>
          <div className="thumbnail">
            <PullToRefresh limit={256} threshold={200} snap={256}>
              <PullToRefreshLoading/>
              <div className="thumbnail-instruction" style={{
                borderRadius: '8px',
                width: "100%",
                height: "100%",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#b8b8b8',
                boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.16)",
              }}>
              <span className="pull-to-refresh-target">Pull Me Down!</span>
              </div>
            </PullToRefresh>
          </div>
          <div className="thumbnail">
            <GameCounter/>
          </div>
        </div>
        <h2>
          More coming soon...
        </h2>
      </div>
    )
  }
}
