import React from 'react'
import { plansData } from './plansData'
import './plans.css'

const Plans = () => {
  return (
    <div className="plans" id='plans'>
        <div className="line"></div>
        <div className='plans-title'>
            <span>ready to start <span className='stroke-text'> your journey </span> with us</span>
        </div>
        <div className="plan-cards">
            {plansData.map((plans, index) => (
                <div className={'cards'} key={plans.id}>
                    <i className={`icon ${plans.icon}`}></i>
                    <div>
                        <span>{plans.planType}</span>
                    </div>
                    <div>
                        <span>{plans.money}</span>
                    </div>
                    <div>
                        <i className='fas fa-check-circle'></i>
                        <span>{plans.duration}</span>
                    </div>
                    <div>
                        <i className='fas fa-check-circle'></i>
                        <span>{plans.extra}</span>
                    </div>
                    <div>
                        <i className='fas fa-check-circle'></i>
                        <span>{plans.access}</span>
                    </div>
                    <div className='see-more'>
                    <span>See more benefits</span> <i className='fas fa-arrow-right'></i>
                    </div> 
                    <button className='btn'>Join Now</button>
                </div>
            ))} 
        </div>
    </div>
  )
}

export default Plans