import React from 'react'
import c from './card.module.scss'

const Card2 = () => {
  return (
    <div className={c.card}>
      <div className={c.up}>
        <div className={c.dots}>
          <div></div>
          <div></div>
          <div className={c.active}></div>
        </div>
        <div className={c.arrows}>
          <button>
            <img 
              src="/icons/left.svg" 
              alt="left"
            />
          </button>
          <button>
            <img 
              src="/icons/right.svg" 
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

export default Card2