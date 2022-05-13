import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, UpdatePostById } from '../utils/API';

const EditPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const defPost = {
        title: '',
        category: '',
        content: '',
        username: ''
    }

    const [ postData, setPostData ] = useState(defPost)

    const getPostData = async (id) => {
        const data = await getPostById(id);
        const result = await data.json();

        setPostData({
            title: result.title,
            category: result.category,
            content: result.content,
            username: result.username
        })
    }

    useEffect(() => {
        getPostData(id)
    }, []);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    
    }
    
    const handleSubmit = async e => {
        e.preventDefault();

        console.log(postData)

        const updatedPost = await UpdatePostById(postData,id)

        if (!updatedPost) {
        throw new Error('something went wrong!');
        }

        console.log('post added!')

        setPostData({...defPost});

        //after submit form redirect user
        navigate(`/community/posts/${id}`);

    }

  return (
    <div>
        <h2>Edit Post</h2>
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
            <textarea
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

export default EditPost