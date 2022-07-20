import React from 'react';
import Game from './Game';
import { eventBus } from '../eventBus'

interface props {
  handleSubmit: any
}

interface state {
  value: string
}


export default class ColumnInput extends React.Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.value)
        }}>
        <label>
          Columns:
          <input type="text" value={this.state.value} onChange={(event) => {this.handleChange(event)}} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}