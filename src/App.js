import React from 'react'
import Header from './Components/Header/Header'
import Homeclass from './Components/Header/Homeclass';
import Parent from './Components/Header/Parent';
var obj={
  name:"kalai",
  age:'25'
};
const App = (props) => {
  console.log(props);
  const getData = (param)=>{
    console.log('getdata',param);
  }
  return (
    <>
    {/* {props.name} {props.age}
    <Header obj={obj} getData={getData}/>
    <Homeclass name={'kishore'} age={22}/> */}
    <Parent/>
    </>
  )
}

export default App

