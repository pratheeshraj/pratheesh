import React from 'react'
import "./works.css"
import Work from './Work'
const Works = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className='section__title' >Portfolio</h2>
        <span className="section__subtitle">Credentials</span>
        <span className="section__subtitle"><b>User - email</b> : user@gmail.com <b>password </b>: User#1234</span>
        <span className="section__subtitle" style={{marginBottom:"5rem"}}><b>Admin - email</b> : admin@gmail.com <b>password</b> : Admin#1234</span>
        <Work/>
    </section>
  )
}

export default Works