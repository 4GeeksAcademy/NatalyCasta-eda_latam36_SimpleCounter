import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const Counter = (props) => {
  return (
    <div className='containerBoxes'>
      <div className='containerClock'>
      <div><FontAwesomeIcon icon={faClock} /></div>
      </div>
      <div className='containerNumbers'>0</div>
      <div className='containerNumbers'>0</div>
      <div className='containerNumbers'>0</div>
      <div className='containerNumbers'>0</div>
      <div className='containerNumbers'>0</div>
      <div className='containerNumbers'>0</div>
    </div>
  )
}

export default Counter

