import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'
const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href = 'https://Linkedin.com' targrt ="_blank"><BsLinkedin/></a>
        <a href = 'https://github.com' targrt ="_blank"><GrGithub/></a>
    </div>
  )
}

export default headerSocials
