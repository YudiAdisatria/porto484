import React from 'react'
import CTA from './CTA'
import ME from '../../assets/profile.jpg'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yudi</h1>
        <h5 className="text-light">Website and Backend</h5>
        <h5 className="text-light">Developer</h5>
        <CTA />

        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header