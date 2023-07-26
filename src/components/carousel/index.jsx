import React from 'react'
import c from './carousel.module.scss'
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'

const Carousel = () => {
  let [ active, setActive ] = React.useState(1)
  let [ slide, setSlide ] = React.useState(false)

  return (
    <div className={c.carousel}> 
      <div className={c.cards}>
        <Card1 />
      </div> 
    </div>
  )
}

export default Carousel