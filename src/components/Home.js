import React from 'react'
import person from '../assets/PersonalData'
import Typical from 'react-typical'



const Home = () => {
    

    return (
        <>
        
<div id="home" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#home" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#home" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
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
        <div className="carousel-item">
            <img src={person.backgroundSlides.slideTwo} alt="background-2"className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
                <a href="#projects"><button type="button" className="btn btn-primary btn-lg ml-3">See Projects</button></a>
                         <div className="dropdown animate__animated animate__bounce animate__repeat-3 animate__slower">
                            <a href="#about"><i className="fas fa-arrow-circle-down"/></a>  
                        </div>
            </div>
        </div>
     
  </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
    </button>
</div>
  
</>
        
            
        
    )
}

export default Home;