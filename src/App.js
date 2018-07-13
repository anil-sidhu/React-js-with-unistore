import React, { Component } from 'react';
import { connect } from 'unistore/react'
import { actions } from './actions'
import Show from './show'
import { bind, memoize, debounce } from 'decko';

class List extends Component {
  state = {
    input: ''
  }
  onChange = event => {
    this.setState({ input: event.target.value })
  }

  render() {
    const { addTodo, list } = this.props;
    const { input } = this.state;
    // console.warn("props", this.props.list)
    return (
      <div>
        {list.map((item, key) => (
          <li key={key}>{item.title}</li>
        ))
        }
      </div>
    )
  }
}
const Counter = (({
   count, list, increment, getData, decrement }) => (
    <div>
      <Show />

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => getData(20)}>Get Data</button>
      <List {...{ list, getData }} />
    </div>
  ));
const App = connect(["count", "secondcount", "list",], actions)(Counter)

export default App; 
