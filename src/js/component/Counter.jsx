import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const Counter = (props) => {
  const paddedSeconds = String(props.seconds).padStart(6, "0");
  const digits = paddedSeconds.split("");
  return (
    <div className='containerBoxes'>
      <div className='containerClock'>
        <div><FontAwesomeIcon icon={faClock} /></div>
      </div>
      <div className='containerNumbers'>{digits[0]}</div>
      <div className='containerNumbers'>{digits[1]}</div>
      <div className='containerNumbers'>{digits[2]}</div>
      <div className='containerNumbers'>{digits[3]}</div>
      <div className='containerNumbers'>{digits[4]}</div>
      <div className='containerNumbers'>{digits[5]}</div>
    </div>
  )
}

export default Counter

