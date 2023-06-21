import React, { Component } from 'react'
import Child from './Child'
var obj=[
    {name:"abcd",age:23,salary:10000},
    {name:"efgh",age:32,salary:20000},
    {name:"ijkl",age:22,salary:30000}
]
export default class Parent extends Component {
  render() {
    const getNum=(param)=>{
     let getSal=obj.filter((orgi)=>{
            return orgi.salary <param ?orgi:'';
        })
        console.log(getSal);
    }
    return (
      <>
      <Child newobj={obj} rend={'hed'} clic={getNum}/>
      </>
    )
  }
}
