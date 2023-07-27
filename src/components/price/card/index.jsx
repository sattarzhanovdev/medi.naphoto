import React from 'react'
import c from './card.module.scss'

const PriceCard = (
  {
    title, 
    time, 
    camera, 
    cases,
    control, 
    service, 
    person,
    price
  }) => {


  return (
    <div className={c.card}>
      <div className={c.up}>
        <div className={c.title}>
          <h1>{title}</h1>
        </div>
        <div className={c.services}>
          <div>
            <img src="/icons/time.svg" alt="time" /> <p>{time}</p>
          </div>
          <div>
            <img src="/icons/camera.svg" alt="camera" /> <p>{camera}</p>
          </div>
          <div>
            <img src="/icons/cases.svg" alt="case" /> <p>{cases}</p>
          </div>
          <div>
            <img src="/icons/control.svg" alt="control" /> <p>{control}</p>
          </div>
          <div>
            <img src="/icons/service.svg" alt="service" /> <p>{service}</p>
          </div>
          {
            person ? 
            <div>
              <img src="/icons/person.svg" alt="person" /> <p>{person}</p>
            </div> :
            null
          }
        </div>
      </div>
      <div className={c.down}>
        <button>Заказать</button>
        <h1>{price} ₽</h1>
      </div>
    </div>
  )
}

export default PriceCard