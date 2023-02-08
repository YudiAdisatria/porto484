import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Exp = () => {
  return (
    <section id='exp'>Exp
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__Website">
          <h3>Website Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>TailwindCSS</h4>
              <small className='text-light'>Novice</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Javascript</h4>
              <small className='text-light'>Novice</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exp