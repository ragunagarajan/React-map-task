import React, { Component } from 'react'
import Headclass from './Headclass';
let obj={
    name:'ele',
    age:32
}
export default class Homeclass extends Component {
  render() {
    console.log(this);
    return (
        <>
        <div>Homeclass= 
        {this.props.name} {this.props.age}
      </div>
      <Headclass obj={obj}/>
        
        </>
    )
  }
}
