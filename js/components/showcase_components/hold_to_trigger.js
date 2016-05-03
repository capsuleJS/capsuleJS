//in progress
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class HoldToTrigger extends Component {
  constructor(){
    super()
    this.state = {
      isTouched: false,
      isTriggered: false,
      timeout: null
    }
    this.boundMouseUpHandler = this.mouseUpHandler.bind(this)
  }

  stop(e) { e.preventDefault(); e.stopPropagation() }

  addHandlers() {
    document.addEventListener('mouseup', this.boundMouseUpHandler)
    document.addEventListener('touchend', this.boundMouseUpHandler)
  }

  removeHandlers() {
    document.removeEventListener('mouseup', this.boundMouseUpHandler)
    document.removeEventListener('touchend', this.boundMouseUpHandler)
  }

  activate(){
    this.setState({isTriggered: true})
    if(this.props.auto){
      console.log('calling callback due to auto equalling true')
    }
  }

  mouseDownHandler(e){
    if(e) this.stop(e)
    this.setState({isTouched: true})
    console.log("inside mouseDownHandler")
    this.setState({timeout : setTimeout(() => {this.activate()}, this.props.wait)})
    this.addHandlers()
  }

  mouseUpHandler(e){
    this.setState({isTouched: false, isTriggered: false})
    clearTimeout(this.state.timeout)
    if(this.state.isTriggered && !this.props.auto){
      console.log("calling callback in mouseUpHandler")
    } else {
      console.log("trigger function cancelled")
    }
  }

  render() {
    return (
      <div style={{
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        position: 'relative',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto'
      }}
      onMouseDownCapture={this.mouseDownHandler.bind(this)}
      onTouchStartCapture={this.mouseDownHandler.bind(this)}>
        {React.cloneElement(this.props.children[0], {
          ...this.props.children.props,
          isTouched: this.state.isTouched,
          isTriggered: this.state.isTriggered,
          wait: this.props.wait
        })}
        {this.props.children[1]}
      </div>
    )
  }
}

export class Reactor extends Component {

  render(){
    return (
      <div style={{
        opacity: this.props.isTouched ? 1 : 0,
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        backgroundColor: this.props.isTriggered ? '#684fb6' : 'black',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        transition: `opacity ${this.props.wait}ms`
      }}>
      </div>
    )
  }
}

/*-------- Testing --------*/

// ReactDOM.render(
//   <HoldToTrigger wait={2000} auto={true}>
//     <Reactor/>
//   </HoldToTrigger>,
//   document.querySelector('#container')
// )
