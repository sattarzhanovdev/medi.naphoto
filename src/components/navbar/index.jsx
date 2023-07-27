import React from 'react'
import c from './navbar.module.scss'
import { NavList } from '../../utils'

const Navbar = () => {
  const [ active, setActive ] = React.useState(1)
  
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
    <div className={c.navbar}>
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
              className={active === item.id ? c.active : null}
              onClick={() => {
                setActive(item.id)
                toScroll(item.id)
              }}
            >
              {item.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar