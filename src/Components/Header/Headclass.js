import React from 'react'

const Headclass = (props) => {
  console.log(props);
  return (
    <div>Headclass= {props.obj.name} {props.obj.age}</div>
  )
}

export default Headclass