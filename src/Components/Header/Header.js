import React from 'react'
const Header = (props) => {
    console.log(props);
  return (
    <div>Head = {props.obj.name} {props.obj.age}
    <button onClick={()=> props.getData(props.obj.name)}>Click Me</button>
    </div>
  )
}

export default Header
