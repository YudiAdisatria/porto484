import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="www.linkedin.com" target="__blank"><BsLinkedin/></a>
        <a href="www.github.com" target="__blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocial