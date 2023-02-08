import React from 'react'
import './about.css'
// import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src="{ME}" alt="About Image" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Partner</h5>
              <small>2 Parterns</small>
            </article>
            
          </div>
          <p>
            An enthusiastic, organized and hard-working person equipped with strong interpersonal skills, strong motivation to succeed, integrity, dedication, perseverance, and supporting experiences. Graduate on 2022 from Informatics Engineering of Computer Science department at Soegijapranata Catholic University. I have some experiences on several lecturer project especially on web development using Laravel focus on backend engineer to provide database MySQL architecture, functional website, and more.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About