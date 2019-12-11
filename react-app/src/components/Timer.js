import React, { Component } from 'react'

export default class Timer extends Component {
  state = {
  minutes: 0,
  seconds: 30,
  pause: false
}

componentDidMount() {
  this.myInterval = setInterval(() => {
    const { seconds, minutes, pause } = this.state

    this.setState({
      pause: this.props.pauseTimer
    })

    if (pause) {
      clearInterval(this.myInterval)
    }

    if (seconds > 0) {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1
      }))
    }
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(this.myInterval)
        this.props.timeRunoutFunction(false);
      } else {
        this.setState(({ minutes }) => ({
          minutes: minutes - 1,
          seconds: 59
        }))
      }
    }
  }, 1000)
}

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }


  render() {
    const { minutes, seconds, pause } = this.state

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
