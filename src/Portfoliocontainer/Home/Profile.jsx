import React from 'react'
import './Profile.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'

const Profile = () => {
  return (
    <section id='portfolio'>
    <h5> My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src = {IMG1} alt =""/>
        </div>
          <h3>This is a portfolio item title</h3>
          <a href = 'https://github.com' className="btn" >Github</a>
          <a href = 'https://dribbble.com/' className="btn btn-primary" target = '_blank'>Live Demo</a>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src = {IMG1} alt =""/>
        </div>
          <h3>This is a portfolio item title</h3>
          <a href = 'https://github.com' className="btn" >Github</a>
          <a href = 'https://dribbble.com/' className="btn btn-primary" target = '_blank'>Live Demo</a>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src = {IMG1} alt =""/>
        </div>
          <h3>This is a portfolio item title</h3>
          <a href = 'https://github.com' className="btn" >Github</a>
          <a href = 'https://dribbble.com/' className="btn btn-primary" target = '_blank'>Live Demo</a>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src = {IMG1} alt =""/>
        </div>
          <h3>This is a portfolio item title</h3>
          <a href = 'https://github.com' className="btn" >Github</a>
          <a href = 'https://dribbble.com/' className="btn btn-primary" target = '_blank'>Live Demo</a>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src = {IMG1} alt =""/>
        </div>
          <h3>This is a portfolio item title</h3>
          <a href = 'https://github.com' className="btn" >Github</a>
          <a href = 'https://dribbble.com/' className="btn btn-primary" target = '_blank'>Live Demo</a>
      </article>
    </div>
   </section>
  )
}

export default Profile

