import React, {useState, useEffect} from 'react'
import person from '../assets/PersonalData';


export function Socialmedia() {
    const [message, setMessage] = useState("fadeout")

    useEffect(() => {
        setMessage()
      },[]);
    
    // window.addEventListener("scroll", ()=>{
    //     const scrollable = document.documentElement.scrollHeight - window.innerHeight
    //     const scrolled = window.scrollY
        // if(window.scrollBy(0, 10)){
        //     console.log("done")
        // }
    // })
    window.addEventListener("scroll", function(event) {
  
        var top = this.scrollY
      
      
        
        if(top >= 365 ){
            setMessage("socialMediaContainer")
        }
        if(top < 365 ){
            setMessage("fadeout")
        }
      
    }, false);
    

    return (
        <div className={message} >
        <ul className="socialLists">
            {person.socialMedias.map((media, index) =>(
                <li key={index} className='list-inline-item'>
                    <a href={media.url} target="_blank" rel="noopener noreferrer">
                        <i className={media.icon}  />
                    </a>
                </li>
            ))}
        </ul>

        </div>
            
    )
}
