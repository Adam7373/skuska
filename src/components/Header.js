import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../obrazky/logo.png'

const Header = _ => (
  <header>
  <div className="header_page">
  <img className="logo_stranky" src={ Logo }/>
  <div className="logo_text">Doplnky a výživa pre športovcov</div>
  </div>
    <nav>
      <ul>
        <li><Link to='/'>Domov</Link></li>
        <li><Link to='/doplnky'>Doplnky</Link></li>
        <li><Link to='/recenzie'>Recenzie</Link></li>
        <li><Link to='/kontakt'>Kontakt</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
