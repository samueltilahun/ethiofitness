import React from 'react'
import './programs.css'
import { programsData } from './programsData'
const Programs = () => {
  return (
    <div className="programs" id='programs'>
        <div className="programs-text">
          <span>explore our </span>
          <span className='stroke-text'> programs </span>
          <span> to shape you</span>
        </div>

        <div className="cards-section">
          {programsData.map(programs => (
          <div data-aos="fade-up" className='cards'>
            <i className={programs.icons}></i>
            <span>{programs.heading}</span>
            <span>{programs.details}</span>
            <div className='join-now'>
              <span>Join Now</span>
              <i className='fas fa-arrow-right'></i>
            </div>
          </div>
          ))}
         
        </div>
    </div>
  )
}

export default Programs