import React from 'react'
import c from './activity.module.scss'

const Activity = () => {
  return (
    <div className={c.activity} id='about'>
      <div className={c.left}>
        <h2>
          Про <br />
          деятельность
        </h2>
      </div>
      <div className={c.right}>
        <p>
          Сату́рн — шестая планета по удалённости от Солнца и вторая по размерам планета в Солнечной системе после Юпитера. Сатурн как газовая планета-гигант. Сатурн назван в честь римского бога земледелия.Перейти к разделу «#Сатурн в культуре» Символ Сатурна.
        </p>
        <div className={c.statistic}>
          <div>
            <h1>
              500+
            </h1>
            <p>Сделанных фото</p>
          </div>
          <div>
            <h1>
              7
            </h1>
            <p>Коллекций</p>
          </div>
          <div>
            <h1>
              17+
            </h1>
            <p>Довольных клиентов</p>
          </div>
        </div>
        <div className={c.down}>
          <li>
            Двиньте вниз ну что вы)
            <img  
              src="/icons/arrow-down.svg" 
              alt="arrow"
            />
          </li>
        </div>
      </div>
    </div>
  )
}

export default Activity