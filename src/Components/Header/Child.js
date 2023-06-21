import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log(this)
    console.log(this.props.newobj,this.props.rend);
    return (
      <div>{this.props.newobj.map((bing,index)=>{
        return <div className='container' key={index}>
            <h5>{bing.name}</h5>
            <h5>{bing.age}</h5>
            <h5>{bing.salary}</h5>
            <button onClick={()=>{this.props.clic(bing.salary)}}>Click me</button>
        </div>
      })}
      </div>
    )
  }
}
