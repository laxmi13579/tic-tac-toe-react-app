import React from 'react'

function Button(props) {
  return (
    <button className='bg-blue-500 text-white font-medium px-2 py-1 rounded hover:bg-blue-600' onClick={props.onClick}>{props.children}</button>
  )
}

export default Button