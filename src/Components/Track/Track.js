import React, { Component } from 'react';
import { Consumer } from '../../Context';

class Track extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          console.log(value);
          return <h1>Tracks</h1>;
        }}
      </Consumer>
    );
  }
}

export default Track;
