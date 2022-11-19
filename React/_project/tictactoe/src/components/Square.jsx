import React from 'react'

import './Square.style.css';

const Square = (props) => { // props => buttons
  // console.log(props)

  return (
    <button type='button' className='btn'>{ props.value }</button>
  )
}

export default Square