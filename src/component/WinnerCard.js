import React from 'react'
import Button from '../UI/Button'
function WinnerCard(props) {
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div class="text-xl font-medium text-primary">Yay!</div>
          <div>
            <p class="text-blue-450">Winner is {props.children}</p>
            <Button onClick={() => props.handleRestart()}>Play again</Button>
          </div>
        </div>
      </div>
  )
}

export default  WinnerCard