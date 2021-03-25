import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: 'abc' } },
      { track: { track_name: '25' } },
    ],
    headings: 'Top 10 Tracks',
  };
  render() {
    return (
      <Context.Provder value={this.state}>
        {this.props.children}
      </Context.Provder>
    );
  }
}

export const Consumer = Context.Consumer;
