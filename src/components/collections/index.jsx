import React from 'react'
import c from './collections.module.scss'
import Collection from './collection'

const Collections = () => {
  return (
    <div className={c.collections} id='collections'>
      <div className={c.title}>
        <h2>Коллекции</h2>
      </div>
      <div className={c.cards}>
        <Collection />
      </div>
      
    </div>
  )
}

export default Collections