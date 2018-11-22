import React, { Component } from 'react';
import  * as d3 from 'd3';
import D3 from './tryd3';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.node = React.createRef();
  }

  render(){
    return(
      <div  className={'container'} ref={this.node}>
        <D3 node={this.node}/>
      </div >
    )
  }
}

export default App;