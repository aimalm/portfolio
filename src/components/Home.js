import React from 'react'
import person from '../assets/PersonalData'
import Typical from 'react-typical'



const Home = () => {
    

    return (
        <>
        
<div id="home" className="carousel slide" data-bs-ride="carousel">
            
  <div className="carousel-inner">
        <div className="carousel-item active ">
            <img src={person.backgroundSlides.slideOne}  className="d-block w-100" alt="background-1"/>
            <div className="carousel-caption justify-content-center" >
                <h3>Hi <span role="img" aria-label="hi-emoji">😎 </span>Nice To Meet You!</h3>
                <h3>I'm A {` `} <Typical steps={person.about.profession} loop={1} wrapper="span" /> </h3>
            
                <a href="#projects"><button type="button" className="btn btn-primary btn-lg ml-3">See Projects</button></a>
                <div className="dropdown animate__animated animate__bounce animate__repeat-3 animate__slower">
                    <a href="#about"><i className="fas fa-arrow-circle-down"/></a>  
                </div>
            </div>
        </div>
       
     
  </div>
   
</div>
  
</>
        
            
        
    )
}

export default Home;