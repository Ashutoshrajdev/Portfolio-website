import React from 'react'
import Experties from './components/experties/Experties'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
// import People from './components/people/People'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import css from './styles/app.module.scss'

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio />
      {/* <People /> */}
      <Footer/>
    </div>
  )
}

export default App