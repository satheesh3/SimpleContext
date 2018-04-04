import React,{Component} from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {CounterContext,counter} from '../context';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends Component {
  constructor(){
    super()
    this.state = {
      count:counter.count
    }
  }
  handleClick(){
   this.setState({ count: this.state.count + 1 })
  }
  render(){
    return(
      <div style={styles}>
        <CounterContext.Provider value={this.state.count}>
          <Hello />
        </CounterContext.Provider>
        <h2 onClick={this.handleClick.bind(this)}>Click On</h2>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
