// TEST PAGE
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getResourceById, createComment } from '../utils/API';
import Auth from '../utils/auth';

import React from 'react'

const SingleResource = () => {
    const { id } = useParams();
    const [ resourceData, setResourceData ] = useState({})
    const [userData, setUserData] = useState({});
    const [ commentData, setCommentData ] = useState({
        comment: '',
        username: ''
    })
  
    const getResource = async () => {
      const data = await getResourceById(id);
      const result = await data.json();
      setResourceData(result)
    }
  
    useEffect(() => {
        getResource()
    }, [])
  
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
          setCommentData({ ...commentData, 'username': response.data.username });
  
        } catch (err) {
          console.error(err);
        }
      };
  
      getUserData();
    }, []);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setCommentData({ ...commentData, [name]: value });
  
    }
  
    const handleSubmit = async e => {
        e.preventDefault();
  
        console.log(commentData)
  
        const newComment = await createComment(commentData, id)
  
        if (!newComment) {
          throw new Error('something went wrong!');
        }
  
        console.log('comment added!')
  
        getResource()
        setCommentData({ ...commentData, 'comment': '' });
  
    }
    // TEST LAYOUT BELOW - CHANGE FUGLY STYLING 
    return (
      <div>
  
          <div>
              <img src="https://via.placeholder.com/250" />
              <p>{resourceData.name}</p>
              <p>{resourceData.type}</p>
              <p>{resourceData.level}</p>
              <p>{resourceData.description}</p>
              <a target='_blank' rel="noopener noreferrer">{resourceData.link}</a>
          </div>
  
          <div>
              <h1>Comments</h1>
              <input 
                  name="comment"
                  type="text"
                  placeholder='add a comment' 
                  value={commentData.comment}
                  onChange={handleInputChange }/>
              <button onClick={handleSubmit}>Submit</button>
              <div>
                  {resourceData.comments?.map(item => {
                      return (
                        // key property must be added to parent
                        // insert comment component below
                          <div key={item.commentId}>
                              <p>{item.comment}</p>
                              <p>{item.username}</p>
                              <p>{item.createdAt}</p>
                          </div>
                      )
                  })
                  }
              </div>
          </div>
      </div>
    )
}
  
  export default SingleResource