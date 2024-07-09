import { Component } from 'react';

interface BugComponentProps {}

interface BugComponentState {
  error: boolean;
}

export default class BugComponent extends Component<
  BugComponentProps,
  BugComponentState
> {
  constructor(props: BugComponentProps) {
    super(props);
    this.state = {
      error: false,
    };
  }
  handleClick = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('I crashed!');
    }
    return (
      <div className="bug-component">
        <p className="bug-component__text">
          Click the button to crash this component.
        </p>
        <button onClick={this.handleClick}>Crash</button>
      </div>
    );
  }
}
