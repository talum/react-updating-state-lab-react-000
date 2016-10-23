const React = require('react');

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let timesClicked = this.state.timesClicked;
    timesClicked++;
    this.setState({timesClicked: timesClicked});
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

module.exports = DigitalClicker;
