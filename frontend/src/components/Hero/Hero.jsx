import React from 'react'
import Header from '../Header/Header'
import homeimage from '../../assets/homeimage.png'
import bodyimage from '../../assets/bodyimage.png'
import backimage from '../../assets/backimage.png'
import heartbeat from '../../assets/heartbeat.png'
import burn from '../../assets/burn.png'
import './hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left">
            <Header />
            <div className="the-best-gym">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>    

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>shape </span>
                    <span>your</span>
                </div>
                <span>ideal body</span>
                 
                    <span className='hero-paragraph'>In here we will help you to shape and build your ideal body and live up your life to fullest</span> 
            </div>
            <div className="figures">
                <div>
                    <span>+120</span>
                    <span>Expert coaches</span>
                </div>
                <div>
                    <span>+100</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>

            <div className="buttons">
                <div className="btn">Get Started</div>
                <div className="btn">Learn More</div>
            </div>
            
        </div>
        <div className="right">
            <button className='btn'>join now</button>
            <div className="heart-rate">
                <img src={heartbeat} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>
            <div className="home-image">
                <img src={homeimage} alt="" />
            </div>
            
            <div className="calories">
                <img src={burn} alt="" />
                <div className="calories-text">
                    <span>Calories Burned</span>
                    <span>116 bpm</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero