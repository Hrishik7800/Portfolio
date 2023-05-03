import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {BsInstagram} from 'react-icons/bs'
const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href = 'https://Linkedin.com' targrt ="_blank"><BsLinkedin/></a>
        <a href = 'https://github.com' targrt ="_blank"><GoMarkGithub/></a>
        <a href = 'https://instagram.com' targrt ="_blank">< BsInstagram/></a>
      
    </div>
  )
}

export default headerSocials
