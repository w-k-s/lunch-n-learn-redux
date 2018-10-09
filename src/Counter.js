import React from 'react';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    
  }

  decrement = () => {
    
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;