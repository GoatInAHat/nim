import { parse } from 'path';
import React from 'react';
import ColumnInput from './ColumnInput';
import GameColumn from './GameColumn';
import { eventBus } from '../eventBus';

export interface column {
  length: number,
  filled: number
}

function newColumns(numList: number[]): column[] {
  return [...Array(numList.length)].map((_, i) => {return { length: numList[i], filled: 0}});
}

var globalColumns: column[] = newColumns([3,4,5])

interface props {
  bot: boolean,
}

interface state {
  value: string;
}

export default class Game extends React.Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleSubmit(event: any) {
    try {
      const parsedInput: number[] = JSON.parse(`[${event}]`);
      globalColumns = newColumns(parsedInput)
      this.forceUpdate()
    } catch (err) {
      alert('Enter a valid list of numbers separated by commas');
      return;
    }
  }

  updateFunction (column: column, id: number) {
    globalColumns[id] = column
    this.forceUpdate()
  }

  render () {
    const columnList: JSX.Element[] = []

    for (const column of globalColumns) {
      columnList.push(<GameColumn column={column} updateFunction={(column: column, id: number) => {this.updateFunction(column, id)}} id={globalColumns.indexOf(column)}></GameColumn>)
    }
    
    return (
      <>
        <ColumnInput handleSubmit={(e: any) => {this.handleSubmit(e)}}></ColumnInput>
        <div className='Game'>
          {columnList}
        </div>
      </>
    )
  }
}