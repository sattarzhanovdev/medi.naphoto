import React from 'react'
import c from './collection.module.scss'

const Collection = () => {
  return (
    <div className={c.card}>
      <div className={c.texts}>
        <h1>Light Sunrise</h1>
        <p>
          Коммерческие студийные портреты для размещения в соцсетях и создания промо материалов.
        </p>
      </div>
      <div className={c.images}>
        <img 
          src="/images/collections/1.png" 
          alt="image" 
        />
        <img 
          src="/images/collections/2.png" 
          alt="image" 
        />
        <img 
          src="/images/collections/3.png" 
          alt="image" 
        />
      </div>
      <div className={c.end}>
        <h3>Подробнее <img src="/icons/arrow45.svg" alt="arrow" /></h3>
        <p>17 фотографий</p>
      </div>
    </div>
  )
}

export default Collection