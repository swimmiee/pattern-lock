import React from "react";
import PatternLock from "react-pattern-lock";

const ANSWER = "0-1-2";

export default class Pattern extends React.Component {
  state = {
    path: [],
    isLoading: false,
    error: false,
    success: false,
    disabled: false,
    size: 3
  };

  errorTimeout = 0;

  componentDidUpdate() {
    this.state.success && (window.location.href='https://www.naver.com');
  }

  onChange = (path) => {
    this.setState({ path: [...path] });
  };

  onFinish = () => {
    this.setState({ isLoading: true });
    // an imaginary api call
    setTimeout(() => {
      if (this.state.path.join("-") === ANSWER) {
        this.setState({ isLoading: false, success: true, disabled: true });
      } else {
        this.setState({ disabled: true, error: true });
        this.errorTimeout = window.setTimeout(() => {
          this.setState({
            disabled: false,
            error: false,
            isLoading: false,
            path: []
          });
        }, 500);
      }
    }, 200);
  };

  render() {
    const { size, path, disabled, success, error, isLoading } = this.state;
    return (
      <React.Fragment>
        <div className="center">
          <PatternLock
            size={size}
            onChange={this.onChange}
            path={path}
            error={error}
            onFinish={this.onFinish}
            connectorThickness={5}
            disabled={disabled || isLoading}
            success={success}
          />
        </div>
      </React.Fragment>
    );
  }
}
