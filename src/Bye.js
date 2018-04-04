import React from 'react'
import {CounterContext} from '../context';

const Bye = () => {
  console.log(CounterContext)
  return (
    <div>
      <CounterContext.Consumer>
        {(counter) => <div>Count:{counter}</div>}
      </CounterContext.Consumer>
    </div>
  )

}
export default Bye;