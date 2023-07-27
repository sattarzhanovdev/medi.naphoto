import React from 'react'
import c from './price.module.scss'
import { PriceListDay, PriceListHour } from '../../utils'
import PriceCard from './card'

const Price = () => {
  const [ active, setActive ] = React.useState(1)

  return (
    <div className={c.price}>
      <div className={c.none} id='price'>

      </div>
      <div className={c.title}>
        <h1>Прайс</h1>
      </div>
      <div className={c.select}>
        <div 
          className={active === 1 ? c.active : null}
          onClick={() => setActive(1)}
        >
          Часовые
        </div>
        <div 
          className={active === 2 ? c.active : null}
          onClick={() => setActive(2)}
        >
          На весь день
        </div>
      </div>
      <div className={c.cards}>
        {
          active === 1 ?
          PriceListHour.map(item => (
            <PriceCard 
              key={item.id}
              title={item.title}
              time={item.time}
              camera={item.camera}
              cases={item.case}
              control={item.control}
              service={item.service}
              person={item.person}
              price={item.price}
            />
          )) :
          PriceListDay.map(item => (
            <PriceCard 
              key={item.id}
              title={item.title}
              time={item.time}
              camera={item.camera}
              cases={item.case}
              control={item.control}
              service={item.service}
              person={item.person}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Price