import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className = 'about'>
        <div className="about-left">
         <img src={about_img} alt="" className = 'about-img' />
         <img src={play_icon} alt="" className = 'play_icon' onClick ={()=> {setPlayState(true)}} />
        </div> 
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolores a reprehenderit sapiente amet ipsam nisi ea ipsa dicta expedita?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sequi exercitationem, sint accusantium possimus alias sed repellat facilis atque mollitia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perferendis itaque, tempora repellendus consequatur at distinctio. Veniam similique corporis debitis.</p>
        </div>     
    </div>
  )
}

export default About