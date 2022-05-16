import { useState, useEffect } from 'react'
import Auth from '../utils/auth';
import { useNavigate } from "react-router-dom";
import { createPost } from '../utils/API';
import Header from "../components/Header";

const CreatePost = () => {
    const navigate = useNavigate();

    const defPost = {
        title: '',
        category: '',
        content: '',
        username: ''
    }

    const [ postData, setPostData ] = useState(defPost)
    const [ showAlert, setShowAlert ] = useState(false)
    // const [ userData, setUserData ] = useState({});

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

            setPostData({ ...postData, 'username': response.data.username });

        } catch (err) {
            console.error(err);
        }
        };

        getUserData();
    }, []);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        value !== '' && setShowAlert(false)
        setPostData({ ...postData, [name]: value });

      }
    
    const handleSubmit = async e => {
        e.preventDefault();

        if(postData.category === '') {
            setShowAlert(true)
            return false
        }

        const newPost = await createPost(postData)

        if (!newPost) {
        throw new Error('something went wrong!');
        }

        console.log('post added!')

        setPostData({...defPost});

        //after submit form redirect user
        navigate(`/community/`);

    }

  return (
    <>
        <Header />
        {/* <div className='Login'> */}
        <div className='container mt-0 mb-6'>
            <h2 className="title">Create A New Post</h2>
            <div className="mb-4">
                <label className="mb-2">Category</label>
                <select
                    className="is-block p-2"
                    name="category"
                    value={postData.category}
                    onChange={handleInputChange} 
                >
                    <option value=''>Select</option>
                    <option value="show off">Show Off</option>
                    <option value="help me">Help Me</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="buddy">Buddy</option>
                </select>
                {/* Show alert if no category is selected upon submitting */}
                {showAlert && <p>Please select a category!</p>}
            </div>  
            <div className="mb-4">
                <label className="mb-2">Title</label>
                <input
                    className="input is-normal is-block p-2"
                    type="text"
                    name="title"
                    value={postData.title}
                    placeholder="title"
                    onChange={handleInputChange} 
                />
            </div>  
            <div className="mb-4">
                <label className="mb-2">Content</label>
                <textarea
                    className="textarea is-block p-2"
                    name="content"
                    value={postData.content}
                    placeholder="markdown supported"
                    onChange={handleInputChange} 
                    cols="150"
                    rows="15"
                />
            </div>
            <button className="button is-info" onClick={handleSubmit}>Submit</button> 
        </div>
    </>
  )
}

export default CreatePost