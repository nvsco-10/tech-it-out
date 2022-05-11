import React, {useState} from 'react'
import { Link } from "react-router-dom";
import validator from 'validator'



export default function Contact() {

    const [userFormData, setUserFormData] = useState({   name: '',
    email: '',
    message: ''});
    const [emailError, setEmailError] = useState('')
   
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        
    };

    const validateEmail = (e) => {
        let email = e.target.value
        
        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      setUserFormData({
        email: '',
        name: '',
        message:''
        
      });
      
    };
  
    return (
    <div className='login_form'>
  
        <h1>Ask us a question!</h1>
    
        <form onSubmit={handleFormSubmit}>
       
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
                    type="text"
                    placeholder="Email"
                    onChange={(e) => { handleInputChange(e); validateEmail(e)}}
                    value={userFormData.email}
                    required
                    />
                    <span style={{
          fontWeight: 'bold',
          color: 'aqua',
        }}>{emailError}</span>
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
    
  )
}

