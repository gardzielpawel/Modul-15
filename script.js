class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.running = false;

    this.state = {
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };

    this.reset();    
  }

  reset() {
    this.setState({
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    });
  }

  format() {
    return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
  }

  start() {
    if (!this.running) {
        this.running = true;
        this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
  }

  calculate() {
    this.setState(prevState => {
      prevState.times.miliseconds += 1;
      if (prevState.times.miliseconds >= 100) {
          prevState.times.seconds += 1;
          prevState.times.miliseconds = 0;
      }
      if (prevState.times.seconds >= 60) {
          prevState.times.minutes += 1;
          prevState.times.seconds = 0;
      }

      return prevState;
    });
  }

  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  render() {
    return (
      <div>
        <nav className="controls">
          <a href="#" className="button" onClick={this.start.bind(this)}>Start</a>
          <a href="#" className="button" onClick={this.stop.bind(this)}>Stop</a>
        </nav>
        <div className="stopwatch">
          {this.format()}
        </div>
        <ul className="results"></ul>
      </div>
    );
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
      result = '0' + result;
  }
  return result;
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
