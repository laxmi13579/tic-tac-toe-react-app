import React from 'react'
import Button from '../UI/Button'
function WinnerCard(props) {
  return (
    // <div class="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4  w-96">

    <div class="flex flex-col  bg-white rounded-xl shadow-lg  w-96 p-4 space-y-2">
        <div className='flex flex-row space-x-4'>
          <p class="text-xl font-medium text-primary">Yay!</p>
          <p class="text-xl font-medium text-blue-450">Winner is {props.children}</p>
          </div>
          <div className='grid content-around'>
            <Button className='bg-blue-500 text-white font-medium px-2 py-1 rounded hover:bg-blue-600' onClick={() => props.handleRestart()}>Play again</Button>
        </div>
      </div>
  )
}

export default  WinnerCard