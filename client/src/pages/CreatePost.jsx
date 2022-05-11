import { useState, useEffect } from 'react'
import Auth from '../utils/auth';
import { useNavigate } from "react-router-dom";
import { createPost } from '../utils/API';

const CreatePost = () => {
    const navigate = useNavigate();

    const defPost = {
        title: '',
        category: '',
        content: '',
        username: ''
    }

    const [ postData, setPostData ] = useState(defPost)
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
        setPostData({ ...postData, [name]: value });
    
      }
    
    const handleSubmit = async e => {
        e.preventDefault();

        console.log(postData)

        const newPost = await createPost(postData)

        if (!newPost) {
        throw new Error('something went wrong!');
        }

        console.log('post added!')

        setPostData({...defPost});

        //after submit form redirect user
        navigate('/community');

    }

  return (
    <div>
        <div>
            <label>Category</label>
            <select
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
        </div>  
        <div>
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={postData.title}
                placeholder="title"
                onChange={handleInputChange} 
            />
        </div>  
        <div>
            <label>Content</label>
            <input
                type="text"
                name="content"
                value={postData.content}
                placeholder="content"
                onChange={handleInputChange} 
            />
        </div>
        <button onClick={handleSubmit}>Submit</button> 
    </div>
  )
}

export default CreatePost