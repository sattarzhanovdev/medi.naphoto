import React from 'react'
import c from './banner.module.scss'
import Carousel from '../carousel'

const Banner = () => {
  return (
    <div className={c.banner}>
      <div className={c.title}>
        <p>Сату́рн — шестая планета по удалённости </p>
        <h1>Сату́рн — шестая планета по удалённости от Солнца и вторая по размерам</h1>
      </div>
      <Carousel />
    </div>
  )
}

export default Banner