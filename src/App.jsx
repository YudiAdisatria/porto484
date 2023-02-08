import React from 'react'
import Header from './components/header/Header'
import Nav from './components/Nav'
import About from './components/about/About'
import Exp from './components/exp/Exp'
import Service from './components/services/Service'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Exp />
      <Service />
    </>
  )
}

export default App