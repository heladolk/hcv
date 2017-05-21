import React from 'react'
import List from './components/list'

export default class Board extends React.Component {
  render = () => (
      <div className="board">
        <p className="title">todo-app</p>
        <List />
      </div>
  )
}
