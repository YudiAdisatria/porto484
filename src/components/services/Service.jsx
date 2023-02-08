import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const service = () => {
  return (
    <section id='services'>
        <h2>Detail Skills</h2>

        <div className='container service__container'>
            <article className='service'>
                <div className="service__head">
                    <h3>Project Management</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>
                            Planning project
                        </p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>
                            Analyzing project
                        </p>
                    </li>
                </ul>
            </article>

            <article className='service'>
                <div className="service__head">
                    <h3>Programming</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>
                            Website developer using Laravel 8
                        </p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>
                            Database trigger, event, and distributed
                        </p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>
                            Debuging
                        </p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>
                            Generating report from website database
                        </p>
                    </li>
                </ul>
            </article>

            <article className='service'>
                <div className="service__head">
                    <h3>Working Skills</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>
                            Presentation
                        </p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>
                            Team work
                        </p>
                    </li>
                </ul>
            </article>
        </div>        
    </section>
  )
}

export default service