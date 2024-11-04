import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {
  
  const [playState, setPlayState] = useState(false);
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle = 'Our PROGRAM' title='whar we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle = 'Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title='What student says'/>
      <Testimonials/>
      <Title subTitle = 'Contact us' title='Get in Touch'/>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <VideoPlayer  playState={playState} setPlayState={setPlayState} />

    </div>
  )
}

export default App