import React, {useState} from 'react'

export default function Contact() {

    const defForm = {
        name: '',
        email: '',
        message: ''
    }

    const [ formData, setFormData ] = useState(defForm);
    const [ nameError, setNameError ] = useState('');
    const [ emailError, setEmailError] = useState('');
    const [ messageError, setMessageError ] = useState('');

    const handleInputChange = (e) => {
        
        if (e.target.name === "name") {
            !e.target.value ? setNameError(`${e.target.name} is required.`) : setNameError('');
        }

        if (e.target.name === "message") {
            !e.target.value ? setMessageError(`${e.target.name} is required.`) : setMessageError('');
        }
        
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleEmailInput = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;

        if (emailRegex.test(e.target.value)) {
            setFormData({...formData, [e.target.name]: e.target.value})
            setEmailError('');
        } else {
            setEmailError('please enter a valid email');
        }
            
    }

    const submitForm = (e) => {
        e.preventDefault();

        console.log(formData)
    }
  return (
    <section className="contact">

    <h2 className="section-heading">contact</h2>

    <form className="contact-form" onSubmit={submitForm}>
        <div className="form-row">
            <label>Name</label>
            <input
                type="text"
                name="name"
                required
                onChange={handleInputChange}
            />
            {nameError.length > 0 && (
                <p className="error">{nameError}</p>
            )}
        </div>
        <div className="form-row">
            <label>Email Address</label>
            <input
                type="email"
                name="email"
                required
                onChange={handleEmailInput}
            />
            {emailError.length > 0 && (
                <p className="error">{emailError}</p>
            )}
        </div>
        <div className="form-row">
            <label>Message</label>
            <textarea name="message" required rows="4" cols="79" onChange={handleInputChange} /> 
        </div>
        {messageError.length > 0 && (
        <div>
            <p className="error">{messageError}</p>
        </div>
        )}
        <div>
            <button className="contact-btn">Send</button>
        </div>
    </form> 
</section>

  )
}
