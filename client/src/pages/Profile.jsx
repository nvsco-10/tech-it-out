import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Auth from '../utils/auth';
import "bulma/css/bulma.min.css";
import { getUserById } from '../utils/API'
import "../css/style.css";
import PostList from '../components/PostList'

export default function Profile() {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([])

  const getUserPosts = async (id) => {
    const data = await getUserById(id);
    const result = await data.json();
    console.log(result)
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

        setUserData(response.data);
        getUserPosts(response.data._id)

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
        <p>{userData._id}</p>
        <p>username: {userData.username}</p>
        <p>email: {userData.email}</p>
      </div>
        
      <h2>POSTS</h2>
      {/* {<PostList posts={posts} />} */}

    </>
  )
}
