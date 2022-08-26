import React from 'react'
import Button from 'react-bootstrap/Button';

const Card = ({image}) => {
  return (
    <div className='cards'>
      <img src={image} alt="" />
      <div className='content'>
        
        <Button variant="danger">Ver más</Button>{' '}
      </div>
    </div>
  )
}

export default Card