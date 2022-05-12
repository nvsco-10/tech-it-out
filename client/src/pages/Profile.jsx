import { useState, useEffect, useRef } from 'react'
import Auth from '../utils/auth';
import "bulma/css/bulma.min.css";
import { getUserById, UpdateUserById } from '../utils/API'
// import "../css/style.css";
import PostList from '../components/PostList'
import Header from '../components/Header';


export default function Profile() {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([])
  const [disabled, setDisabled] = useState(true);
  const [ showAlert, setShowAlert ] = useState(false)

  const getUserPosts = async (id) => {
    const data = await getUserById(id);
    const result = await data.json();
    console.log(result)
    setUserData(result)
    setPosts(result.posts)
  }
   
  useEffect(() => {
    const getUserData = async () => {
      try {
        const isLoggedIn = Auth.loggedIn() 

        if (!isLoggedIn) {
          return false;
        }

        const response = await Auth.getProfile();

        if (!response) {
          throw new Error('something went wrong!');
        }

        // setUserData(response.data);
        getUserPosts(response.data._id)

      } catch (err) {
        console.error(err);
      }
    };

    getUserData();

  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
  }

  const updateContact = async (e) => {
    e.preventDefault()

    const updatedUser = await UpdateUserById(userData,userData._id)

    if (!updatedUser) {
      throw new Error('something went wrong!');
      }

      console.log('user updated!')
      setShowAlert(true)

  }
  
  function handleGameClick() {
    setDisabled(!disabled);
  }
  return (
    <>
      <div><Header/></div>

      {/* USER DETAILS HERE */}
      <h2 className="title has-text-centered">My Profile</h2>
        <div className="card mb-6">
          <header className="card-header card-header-title    has-background-grey-lighter">

              <figure className="image is-128x128">
                    <img className="is-rounded" src="https://media.istockphoto.com/photos/koala-on-eucalyptus-tree-picture-id992046278?"/>
              </figure>

              <div className='has-text-black is-size-4            has-text-centered m-3'>
                  <p>{userData.username}</p> 
              </div> 



          </header>

          <div className="card-content">
              <div className="content has-text-justified">
                  <h3>How To Reach Me</h3>

          <div></div>
               <input  
      type="text" value={userData} onChange={e => setUserData(e.target.value)} 
      hidden={disabled}/>
      <button hidden={disabled} onClick={handleGameClick}>Submit</button>
      <br />

      <button hidden={!disabled} onClick={handleGameClick}>Add Contact Info</button>

                  <div className='list-item'>
                      <a href="mailto:gary@gmail.com"> 
                        <img src="https://img.icons8.com/ios-filled/48/apple-mail.png" alt="mail-logo"/>
                      </a>
                  </div>

                  <div>
                      <a href="https://github.com/garytalmes" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/material-outlined/48/github.png" alt="github-logo"/>
                      </a>
                      <input
                        type="text"
                        name="github"
                        placeholder="github profile"
                        value={userData.github}
                        onChange={handleInputChange}
                      />
                  </div>

                  <div>
                      <a href="http://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-glyphs/48/linkedin-circled--v1.png" alt="linkedin-logo"/> </a>
                      <input
                        type="text"
                        name="linkedin"
                        placeholder="linked profile"
                        value={userData.linkedin}
                        onChange={handleInputChange}
                      />
                  </div>
                  <div>
                    {showAlert && <p>user updated!</p>}
                    <button onClick={updateContact}>Save</button>
                  </div>

              </div>

          </div>

        </div>

        
      <h2 className="title has-text-centered">My Posts</h2>

      {/* post lists here */}
      {<PostList posts={posts} modify='true' />}
      
    </>
  )
}
