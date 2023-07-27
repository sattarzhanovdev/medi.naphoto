import React from 'react'
import c from './carousel.module.scss'
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'
import { TinderLikeCard } from 'react-stack-cards'

const Carousel = () => {
  let [ active, setActive ] = React.useState(1)

  console.log(active);

  return (
    <div className={c.carousel}> 
      <div className={c.cards}>
        <Card1 active={active} setActive={setActive} /> 
        <Card2 active={active} setActive={setActive} /> 
        <Card3 active={active} setActive={setActive} /> 
      </div> 
    </div>
  )
}

export default Carousel