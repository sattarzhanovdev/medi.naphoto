import React from 'react'
import c from './navbar.module.scss'
import { NavList } from '../../utils'

const Navbar = () => {
  const [ active, setActive ] = React.useState(1)

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
              onClick={() => setActive(item.id)}
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