import React from 'react'
import './join.css'

const join = () => {
  return (
    <div className="join">
        <div className="line"></div>
        <div className="join-content">
            <div data-aos="fade-right" className='left-text'>
                <div>
                    <span className='stroke-text'>ready to </span>
                    <span>level up </span>
                </div>
                <div>
                    <span> your body </span>
                    <span className='stroke-text'>with us?</span>
                </div>
            </div>
            <div data-aos="fade-left" className="join-us">
                <input type="text" placeholder='Enter your Email Address here' />
                <button className='btn'>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default join