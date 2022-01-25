import React from "react";
import "../styles.css";

interface AppProps {
  appName?: string;
}

interface AppStateProps {
  counter: number;
}

export const FnApp = (props: AppProps): JSX.Element => {
  return <div>This is {props.appName} </div>;
};

class App extends React.Component<AppProps, AppStateProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.props.appName}</h1>
        <FnApp appName="Functional components" />
        <br />
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <br />
        <h2>{this.state.counter} </h2>
      </div>
    );
  }
}

export default App;
