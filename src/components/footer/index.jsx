import React from 'react'
import c from './footer.module.scss'
import { NavList } from '../../utils'

const Footer = () => {
  const toScroll = (id) => {
    if(id === 1){
      
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }else if(id === 2){
      const about = document.getElementById('about')
      about.scrollIntoView({behavior: 'smooth', block: 'end'})
    }else if(id === 3){
      const collections = document.getElementById('collections')
      collections.scrollIntoView({behavior: 'smooth', block: 'center'})
    }else if(id === 5){
      const price = document.getElementById('price')
      price.scrollIntoView({behavior: 'smooth', block: 'start'})
    }else if(id === 6){
      const contacts = document.getElementById('contacts')
      contacts.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
  }
  return (
    <div className={c.footer}>
      <div className={c.left}>
        <div className={c.logo}>
          <li>
            medi.naphoto
          </li>
        </div>
        <ul className={c.list}>
          {
            NavList.map((item) => (
              <li 
                key={item.id}
                onClick={() => toScroll(item.id)}
              >
                {item.title}
              </li>
            ))
          }
        </ul>
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
      <div className={c.qr}>
        <img src="/images/qr_code.png" alt="qr code" />
        <p>Нажмите сюда ну тут текст</p>
      </div>
    </div>
  )
}

export default Footer