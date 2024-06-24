import React from 'react'
import './reasons.css'
import bodybuilder1 from '../../assets/bodybuilder1.jpeg'
import bodybuilder2 from '../../assets/bodybuilder2.jpg'
import bodybuilder4 from '../../assets/bodybuilder4.jpg'
import bodybuilder3 from '../../assets/bodyimage.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className="reasons" id='whyus'>
        <div className="line"></div>
        <div className='reasons-content'>
        <div data-aos="fade-right" className="pictures">
            <img src={bodybuilder1} alt="" />
            <div>
                <img src={bodybuilder4} alt="" />
                <img src={bodybuilder2} alt="" />
            </div>
        </div>
        <div className="heading-content">
            <div className="heading">some reasons</div>
            <div><span className='stroke-text'>why</span><span> choose us?</span></div>
            <div className='reasons-body'>
                <div>
                    <img src={tick} alt="" />
                    <span>over 5+ expert coachs</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 new free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>reliable partners</span>
                </div>
                <div className="right-image">
                    <img data-aos="fade-left" src={bodybuilder3} alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reasons
