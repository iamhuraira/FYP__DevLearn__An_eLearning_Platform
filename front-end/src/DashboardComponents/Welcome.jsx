import React from 'react'

const Welcome = ({name}) => {
    return (
      <div className='background-dashboard'>
            
    <h2>Welcome! <br /> <span>{name}</span></h2>
      </div>
  )
}

export default Welcome