import React from 'react'
import Footer from '../components/Footer/Footer'
import HomePageScreen from '../screens/HomePageScreen'
import HomeScreen from '../screens/HomeScreen'
export default function HomePage() {
  return (
    <div>
      <HomePageScreen/>
      <div className='space1' style={{padding:"43px"}}>
      <HomeScreen/>
      </div>
      <div>


      <Footer/>
      </div>
    </div>
  )
}
