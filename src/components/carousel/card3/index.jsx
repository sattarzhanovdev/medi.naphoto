import React from 'react'
import c from './card.module.scss'

const Card3 = ({active, setActive}) => {
  return (
    <div className={c.card} id={active === 1 ? c.card3 : active === 2 ? c.card2 : c.card1}>
      <div className={c.up}>
        <div className={c.dots}>
          <div></div>
          <div></div>
          <div className={c.active}></div>
        </div>
        <div className={c.arrows}>
          <button onClick={() => active === 1 ? setActive(3) : setActive(active -= 1)}>
            <img 
              src="/icons/left-dark.svg" 
              alt="left"
            />
          </button>
          <button onClick={() => active === 3 ? setActive(1) : setActive(active += 1)}>
            <img 
              src="/icons/right-dark.svg" 
              alt="right"
            />
          </button>
        </div>
      </div>
      <div className={c.down}>
        <div className={c.left}>
          <h3>Светлана Антипова</h3>
          <p>Makeup специалист</p>
        </div>
        <div className={c.right}>
          <p>Из коллекции “ColorPlus”</p>
        </div>
      </div>
    </div>
  )
}

export default Card3