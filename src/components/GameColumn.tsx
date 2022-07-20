import React from 'react';
import { column } from './Game';

interface props {
  updateFunction: any,
  column: column,
  id: number,
}

interface state {}

export default class GameColumn extends React.Component<props, state> {
  
  render () {
    const buttons: JSX.Element[] = []

    for (var i = 0; i < this.props.column.length; i++) {
      if (this.props.column.filled > i) {
        buttons.push(<button className='ColumnButton Filled' id={i.toString()} onClick={() => {}}></button>)
      } else {
        // eslint-disable-next-line no-loop-func
        buttons.push(<button className='ColumnButton Empty' id={i.toString()} onClick={(e) => {
          this.props.updateFunction({ length: this.props.column.length, filled: parseInt(e.currentTarget.id) + 1}, this.props.id)
        }}></button>)
      }
    }

    console.log(buttons)

    return (
      <span className='GameColumn'>
        <div className='ColumnCounter'>{this.props.column.filled}/{this.props.column.length}</div>
        <div className='ButtonContainer'>
          {buttons}
        </div>
      </span>
    )
  }
}