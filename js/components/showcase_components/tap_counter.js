import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class TapCounter extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0,
      finalCounter: 0,
      timeout: null
    }
  }

  stop(e) { e.preventDefault(); e.stopPropagation() }

  mouseDownHandler(e){
    if(e) this.stop(e)
    if(!this.state.timeout){
      this.setState({timeout: setTimeout(() => {this.setState({timeout: null, finalCounter: this.state.counter, counter: 0})}, this.props.wait)})
    }
    if(this.state.timeout){
      this.setState({counter: this.state.counter + 1})
    }
  }

  render() {
    return (
        <div>
          <button className="counter-button" onMouseDownCapture={()=>this.mouseDownHandler()}>Tap Me!</button><br/>
          { this.state.timeout !== null ? this.state.counter : this.state.finalCounter }
        </div>
    )
  }
}

export default class GameCounter extends Component {
  constructor() {
    super()
    this.state = {
      wait: 1000
    }
  }

  stop(e) { e.preventDefault(); e.stopPropagation() }

  render() {
    return(
      <div className="counter">
      <div className="counter-prompt">
        How many times can you <br/> click the button in <input className="counter-input"
          value={this.state.wait}
          onChange={(event)=>this.setState({wait: event.target.value})} /> ms? <br/>
        <TapCounter wait={this.state.wait} />
      </div>
      </div>
    )
  }
}
