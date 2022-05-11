import React, {useState,useref} from 'react'
import Navbar from '../components/Navbar'
import "bulma/css/bulma.min.css";
import "../css/app.css";


export default function Profile() {
    const [name, setName] = useState('')
    // const inputRef = useref()

  return (
    <>
    <div><Navbar/></div>
        <h2 className="title has-text-centered">My Profile</h2>
             <div className="card mb-6">
                <header className="card-header card-header-title    has-background-grey-lighter">

                    <figure className="image is-128x128">
                         <img className="is-rounded" src="https://media.istockphoto.com/photos/koala-on-eucalyptus-tree-picture-id992046278?"/>
                    </figure>

                    <div className='has-text-black is-size-4            has-text-centered m-3'>
                        <p>{name}</p>
                     

                        <input type="text"
                        placeholder='Name'
                         /> 
                         <br />
                        <button>Submit</button>
                         
                    </div>
                </header>

    <div className="card-content">
              <div className="content has-text-justified">
                  <h3>How To Reach Me</h3>

                    <div className='list-item'>
                       <a href="mailto:gary@gmail.com"> <img src="https://img.icons8.com/ios-filled/48/apple-mail.png" alt="mail-logo"/></a> 
                    </div>
                    <div>
                        <a href="https://github.com/garytalmes" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/material-outlined/48/github.png" alt="github-logo"/></a>
                       
                    </div>
                    <div>
                        <a href="http://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-glyphs/48/linkedin-circled--v1.png" alt="linkedin-logo"/> </a>
                    </div>
     
              </div>
           
            </div>
            </div>

      
    <div className="card mb-6">
    <h2 className="title has-text-centered">My Post</h2>
            <header className="card-header card-header-title has-background-grey-lighter">
              <div className="column">
                <p className=" has-text-primary-light">
                  <a
                    href="/post/1" // would actually be /post/id
                    className="has-text-black is-capitalized is-pulled-left"
                  >
                    I need a study buddy. I just started javascript.
                  </a>
                </p>
              </div>

              <div className="column">
                <span className=""> </span>
              </div>
            </header>

    <div className="card-content">
              <div className="content has-text-justified">
                I just started Codecademy. Prefer someone in the same timezone -
                GMT. Email me at gus123@gmail.com.
              </div>
              <div className="is-pulled-right">
                <b>user.username</b>
                <a href="https://twitter.com/{{user.twitter}}">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/{{user.github}}">
                  <i className="fab fa-github"></i>
                </a>
                April 22, 2022
                <a href="#">24 comments</a>
              </div>
            </div>
            </div>
    </>
  )
}
