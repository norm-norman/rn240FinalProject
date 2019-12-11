import React, { Component } from 'react'

export default class Timer extends Component {
  state = {
  minutes: 0,
  seconds: 30,
  pause: false
}

componentDidMount() {
  this.myInterval = setInterval(() => {
    const { seconds, minutes, pause } = this.state // grab necessary values from state

    // update state from parent component value
    this.setState({
      pause: this.props.pauseTimer
    })

    // check for paused timer flag
    if (pause) {
      clearInterval(this.myInterval)
    }

    // decrement seconds and update state accordingly
    if (seconds > 0) {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1
      }))
    }

    // reset counters to stay out of the negatives
    if (seconds === 0) {
      if (minutes === 0) { // timer ended
        clearInterval(this.myInterval)
        this.props.timeRunoutFunction(false); // trigger callback function to alert game of time runout
      } else {
        this.setState(({ minutes }) => ({
          minutes: minutes - 1,
          seconds: 59
        }))
      }
    }
  }, 1000) // set interval for one second (1000 milliseconds)
}

  // housekeeping
  componentWillUnmount() {
      clearInterval(this.myInterval)
  }


  render() {
    const { minutes, seconds } = this.state

    // display time until it runs out - then display message to user
    return (
      <div>
    { minutes === 0 && seconds === 0
        ? <strong><p>Time's Up!</p></strong>
        : <p>Timer: {seconds < 10 ? `0${seconds}` : seconds}</p>
    }
    </div>

    )
  }
}
