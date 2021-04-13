import React from "react";
import PropTypes from "prop-types";

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  render() {
    const message =
      this.state.secondsLeft === 0
        ? "Boom!"
        : `${this.state.secondsLeft} seconds left before I go boom!`;

    return <div>{message}</div>;
  }
}

Bomb.defaultProps = {
  initialCount: 60,
};

Bomb.propTypes = {
  initialCount: PropTypes.number,
};
