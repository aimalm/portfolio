import React from 'react';
import person from '../assets/PersonalData';

const About = ()=>{
    return(
        
        <div className="container-fluid about" id="about">
            <div className="row headers padding">
                <div className="col-12 text-center ">
                     <h1 className="display-4 animated wow slideInLeft">About Me</h1>
                </div>
                <hr />
                <div className="col-xs-12 col-sm-12 col-md-4 padding">
                    <figure className="figure">
                    <img src={person.about.profilePiPicture} alt="profile" className="profile_image"/>            
                        <figcaption className="figure-caption text-center p-3">{person.about.name}</figcaption>
                    </figure>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8">
                    <div>
                        <p >
                            Enthusiastic and fast-learner looking for junior Web Development job.    
                        </p>
                        <p >
                            Long term oriented and optimistic
                            team player, having good 
                            communication and teaching 
                            skills, social and trustworthy. 
                            Initiative-taker.
                            
                        </p>
                    </div>

                    <div className="">
                        <a href={person.about.resume} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-primary btn-lg">
                           <i className="fas fa-download pr-2">  <span> Download Resume</span></i>
                            </button>
                        </a>
                    </div>
                          
                </div>
            </div>
        </div>
        
    )

};

export default About;