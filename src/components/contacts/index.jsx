import React from 'react'
import c from './contacts.module.scss'

const Contacts = () => {
  return (
    <div className={c.contacts}>
      <div className={c.none} id='contacts'></div>
      <div className={c.left}>
        <h1>Контакты</h1>
      </div>
      <div className={c.right}>
        <p>СВЯЖИТЕСЬ СО МНОЙ ДЛЯ ОБСУЖДЕНИЯ СВОЕЙ ЗАДАЧИ И БЕСПЛАТНОЙ КОНСУЛЬТАЦИИ</p>
        <div className={c.contacts_card}>
          <div>
            <h1>
              8 (800) 555-35-35 
            </h1>
            <p>
              Телефонный номер
            </p>
          </div>
          <div>
            <h1>
              example@email.com 
            </h1>
            <p>
              Электронная почта
            </p>
          </div>
        </div>
        <div className={c.socials}>
          <li>
            <img 
              src="/icons/youtube.svg" 
              alt="youtube"
            />
          </li>
          <li>
            <img 
              src="/icons/twitter.svg" 
              alt="twitter"
            />
          </li>
          <li>
            <img 
              src="/icons/instagram.svg" 
              alt="instagram"
            />
          </li>
          <li>
            <img 
              src="/icons/facebook.svg" 
              alt="facebook"
            />
          </li>
        </div>
      </div>
    </div>
  )
}

export default Contacts