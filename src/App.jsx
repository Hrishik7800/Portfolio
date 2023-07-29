import React from 'react'
import Header from "./Portfoliocontainer/header/header"
import Nav from './Portfoliocontainer/Nav/Nav'
import About from './Portfoliocontainer/Aboutme/About'
import Footer from './Portfoliocontainer/footer/footer'
import Testamonial from './Portfoliocontainer/Testomonial/Testimonial'
import Contact from './Portfoliocontainer/contactme/Contact'
import Home from './Portfoliocontainer/Home/Profile'
import Experience from './Portfoliocontainer/Experience/Experience'
import Services from './Portfoliocontainer/Services/services'
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Home/>
      <Testamonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
