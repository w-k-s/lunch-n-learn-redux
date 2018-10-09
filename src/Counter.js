import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {

  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  render() {
    let {value} = this.props;

    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{value}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    value: state.value
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    increment:()=>{
      dispatch({type: "INCREMENT"})
    },
    decrement:()=>{
      dispatch({type: "DECREMENT"})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);