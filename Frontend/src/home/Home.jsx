import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'


function Home() {
  return (
    <>
    <Navbar/> {/* Importeach component after Creation */}
    <Banner/>
    <Freebook/>
    <Footer/> 
    </>
  )
}

export default Home