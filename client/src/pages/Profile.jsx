import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Auth from '../utils/auth';
import "bulma/css/bulma.min.css";
import "../css/style.css";

export default function Profile() {
  const [userData, setUserData] = useState({});

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

        setUserData(response.data);

      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  return (
    <>
    <div><Navbar/></div>

    {/* USER DETAILS HERE */}
    <div>
      <h2>User Profile</h2>
      <img src='https://via.placeholder.com/250' alt='placeholder' />
      <p>username: {userData.username}</p>
      <p>email: {userData.email}</p>
    </div>
      
    <h2>POSTS</h2>
    <div class="card mb-6">
            <header class="card-header card-header-title has-background-grey-lighter">
              <div class="column">
                <p class=" has-text-primary-light">
                  <a
                    href="/post/1" // would actually be /post/id
                    class="has-text-black is-capitalized is-pulled-left"
                  >
                    I need a study buddy. I just started javascript.
                  </a>
                </p>
              </div>

              <div class="column">
                <span class=""> </span>
              </div>
            </header>

    <div class="card-content">
              <div class="content has-text-justified">
                I just started Codecademy. Prefer someone in the same timezone -
                GMT. Email me at gus123@gmail.com.
              </div>
              <div class="is-pulled-right">
                <b>user.username</b>
                <a href="https://twitter.com/{{user.twitter}}">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/{{user.github}}">
                  <i class="fab fa-github"></i>
                </a>
                April 22, 2022
                <a href="#">24 comments</a>
              </div>
            </div>
            </div>
    </>
  )
}
