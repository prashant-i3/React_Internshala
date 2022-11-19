import React from 'react'


const Square = (props) => { // props => buttons
  // console.log(props)

  return (
    <button type='button'>{ props.value }</button>
  )
}

export default Square