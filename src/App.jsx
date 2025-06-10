import React from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import Banner from './components/banner/Banner'
import Logos from './components/logos/Logos'
import NewArivals from './components/newArrivals/NewArivals'
import TopSelling from './components/topSelling/TopSelling'
import DressStyle  from './components/dressStyle/DressStyle'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Logos/>
    <NewArivals/>
    <TopSelling/>
    <DressStyle/>
    <Subscribe/>
    <Footer/>

    </>
  )
}

export default App
