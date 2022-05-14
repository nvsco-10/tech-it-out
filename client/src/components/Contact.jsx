import React, {useState, useRef} from 'react'
import { Link } from "react-router-dom";
import { Button, Notification } from 'react-bulma-components';
import emailjs from '@emailjs/browser'

import "../css/login.scss";

export default function Contact() {
    const form = useRef()

    const [userFormData, setUserFormData] = useState({   name: '',
    email: '',
    message: ''});
    
  const [showAlert, setShowAlert] = useState(false);

   
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        
    };

    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kurt5ih', 'template_i3ydvdq', form.current, 'MY4m_wVQW7v3cUs7e')
          .then(() => {
              window.location.reload(false)
              setShowAlert(true)
        
          }, () => {
            // setShowAlert(true)
          });
      };
      
 
  
    return (
      <div className="Login">
        <div className='login_form'>
  
        <h1>Ask us a question!</h1>
    
        <form ref={form}onSubmit={sendEmail}>
        {showAlert && (
          // Bulma component
          <Notification color="success" >
            Message sent!
            <Button remove onClick={() => setShowAlert(false)}>x</Button>
          </Notification>
        )}
            <div className="form-row">
                  
                    <input
                    placeholder='Name'
                    type="text"
                    name="name"
                    required
                    onChange={handleInputChange}
                    />
            </div>
  
                <div>

                    <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                    />
                    
                    </div>
                
                     <textarea 
                     placeholder='Message..'
                     name="message" required rows="4" cols="79" onChange={handleInputChange}
                     /> 
           
        
                <button 
                    type="submit"
                    disabled={!(userFormData.name && userFormData.email && userFormData.message)}>
                    
                    Submit
                </button>
                    
        </form>
            <div className='span-border'>
                <span className='span-link'><Link to="/">Back To Home</Link></span>
            </div>
    </div>
  </div>
  )
}

