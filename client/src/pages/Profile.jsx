import { useState, useEffect } from 'react'
import Auth from '../utils/auth';
import "bulma/css/bulma.min.css";
import "../css/userprofile.css";
import { getUserById, UpdateUserById } from '../utils/API'
import PostList from '../components/PostList'
import Header from '../components/Header';


export default function Profile() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    isAdmin: false,
    linkedin: '',
    github: ''
  });

  const [posts, setPosts] = useState([])
  const [ showAlert, setShowAlert ] = useState(false)

  const getUserPosts = async (id) => {
    const data = await getUserById(id);
    const result = await data.json();
   
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
  
  return (
    <>
      <div><Header/></div>

      {/* USER DETAILS HERE */}
      <div class="container">

      <h2 className="title has-text-centered">My Profile</h2>
        <div className="card mb-6">
          <header className="card-header card-header-title mb-2 py-4 has-background-grey-lighter">

              <figure className="image profile-img">
                    <img className="is-rounded" src="https://media.istockphoto.com/photos/koala-on-eucalyptus-tree-picture-id992046278?" alt="koala"/>
              </figure>

              <div className='has-text-black is-size-4            has-text-centered m-3'>
                  <p>{userData.username}</p> 
              </div> 

          </header>

          <div className="card-content socials-container">
              <div className="content has-text-justified">
                  <h3>How To Reach Me</h3>

                  <div className="socials">
                      <a href={`mailto:${userData.email}`}> 
                        <img src="https://img.icons8.com/ios-filled/48/apple-mail.png" alt="mail-logo"/>
                      </a>
                  </div>

                  <div className="socials">
                      <a href={`https://github.com/${userData.github}`} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons" src="https://img.icons8.com/material-outlined/48/github.png" alt="github-logo"/>
                      </a>
                      <input
                        className="input is-rounded ml-4 has-background-grey-lighter"
                        type="text"
                        name="github"
                        placeholder="github profile"
                        value={userData.github}
                        onChange={handleInputChange}
                      />
                  </div>

                  <div className="socials">
                      <a href={`http://www.linkedin.com/${userData.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons" src="https://img.icons8.com/ios-glyphs/48/linkedin-circled--v1.png" alt="linkedin-logo"/> 
                      </a>
                      <input
                        className="input is-rounded ml-4 has-background-grey-lighter"
                        type="text"
                        name="linkedin"
                        placeholder="linked profile"
                        value={userData.linkedin}
                        onChange={handleInputChange}
                      />
                  </div>
                  <div className="mt-4">
                    {showAlert && <p>user updated!</p>}
                    <button className="btn" onClick={updateContact}>Save</button>
                  </div>

              </div>

          </div>

        </div>

        
      <h2 className="title has-text-centered">My Posts</h2>

      {/* post lists here */}
      {<PostList posts={posts} modify='true' />}
      
      </div>
    </>
  )
}
