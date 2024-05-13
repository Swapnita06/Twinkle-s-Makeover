import React from 'react'
import './home.css'
import Carousel from './Carousel'
import Testimonial from './Testimonial'
const Home = () => {
  return (
    <div className='homepage'>
     <Carousel/>
     <Testimonial/>
    </div>
  )
}

export default Home
