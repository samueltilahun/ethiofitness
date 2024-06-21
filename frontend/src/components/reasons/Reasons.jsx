import React from 'react'
import './reasons.css'
import homeimage from '../../assets/homeimage.png'
import bodyimage from '../../assets/bodyimage.png'
import backimage from '../../assets/backimage.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className="reasons">
        <div className="pictures">
            <img src={homeimage} alt="" />
            <div>
                <img src={backimage} alt="" />
                <img src={bodyimage} alt="" />
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
            </div>
        </div>
    </div>
  )
}

export default Reasons
