import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com';


const Contact =()=>{

        const [isSubmitting, setIsSubmitting] = useState(false)
        const [message, setMessage] = useState("")
        const [alertSuccess, setAlertSuccess] = useState("")

        useEffect(() => {
            setMessage()
          },[isSubmitting]);
        

      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_1jymwca', 'template_sy3h1dt', e.target, 'user_PEqi70VcSRGoi1kpcoHyN')
            .then((result) => {
               // console.log(result.text);
               setMessage("Your Message has been sent.")
               setAlertSuccess("alert alert-success")
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            setIsSubmitting(true)
        }

    return(
        <div className="contact about">
        <div id="contact" className="container-fluid">
            <div className="row headers text-center padding">
                <div className="col-12">
                    <h1 className="contact_text">Contact Me</h1>
            </div>
                <hr/>
            </div>
            <div className="row padding">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="container-fluid padding">
                        <div className="row text-center padding">
                            <div className="col-12 p-5">
                            <i className="fas fa-headset fa-5x"></i>
                                <h2 className="contact_text">Live Chat</h2>   
                            </div>
                            <div className="col-12">
                                <p className="lead contact_text">
                                    I am online Monday-Friday between 15:00 - 16:00 <br />
                                    European Central Time
                                </p>
                                <a 
                                  href="#home" 
                                  className="btn btn-primary"
                                  target="_blank" rel="noopener noreferrer"
                                  >
                                    Chat Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" text-center p-5 col-sm-12 col-md-6 col-lg-6">
                    <h2 className="pb-2 contact_text">I'm Ready Let's Talk</h2>
                    <form className="row g-3 needs-validation" onSubmit={sendEmail}>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="name" id="validationCustom01" placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" name="email" id="exampleInputPassword1" placeholder="Your Email" required />
                        </div>
                       
                        <div className="mb-3">
                            <textarea className="form-control" name="message" placeholder="Your Message" rows="6" required />
                        </div>
                        <div className={alertSuccess} role="alert">
                            {message}                       
                        </div>
                       

                             <button type="submit" value="Send" className="btn btn-primary">Submit</button>
                        
                    </form>
                    <div>
                    </div>

                </div>
            </div>
            
        </div>
        </div>
    )

};

export default Contact;