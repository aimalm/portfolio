import React from 'react';
import person from '../assets/PersonalData'

const Footer =()=>{
    const date = new Date().getFullYear();
    return(
        <footer>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                        <span>Aimal Maarij</span>
                        <hr className="light"/>
                        <p>+32 489 78 50 13</p>
                        <p>Maarij.be@gmail.com</p>
                        
                    </div>
                    <div className="col-md-4">
                        <h5>Address</h5>
                        <hr className="light" />
                        <p>Ganzendries 26</p>
                        <p>Ghent, Belgium</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Social Media</h5>
                        <hr className="light" />
                            {person.socialMedias.map((media, index) =>(
                                <p key={index} className="footer-media">
                                    <a href={media.url} target="_blank" rel="noopener noreferrer">
                                        {media.name}
                                    </a>
                                </p>
                            ))}
                    </div>
                    <div className="col-12">
                        <hr className="light-100" />
                        <h5 className="footer-media">&copy; {date} <a href="https://maarij.netlify.app/" target="_blank" rel="noopener noreferrer">
                           Aimal Maarij</a> 
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    )
    
};

export default Footer;