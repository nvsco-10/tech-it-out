import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deletePost } from '../utils/API';

const PostCard = ({id, title, content, username, category, createdAt, commentCount, modify}) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const type = e.target.textContent;
        
        if(type === "delete") {
            deletePost(id);
            window.location.reload(false);
        }

        type === "edit" && navigate(`/community/posts/edit/${id}`)

    }
  
    return (
    <div className="card mb-6">
        <header className="card-header card-header-title has-background-grey-lighter">
            <div className="column">
                <a to={`/community/posts/${id}`}>
                    <p className=" has-text-primary-light">
                        <a
                        href=""
                        className="has-text-black is-capitalized is-pulled-left"
                        >
                        {title}
                        </a>
                    </p>
                </a>
            </div>

            <div className="column">
                <span className="">{category}</span>
                {/* if modify is true, show edit and delete buttons. Shows up only on the profile page */}
                {modify && (
                    <>
                        <button onClick={handleSubmit}>edit</button>
                        <button onClick={handleSubmit}>delete</button>
                    </>
                )}
            </div>
        </header>

        <div className="card-content">
            <div className="content has-text-justified">
                {/* limit post overview to 400 characters */}
                {content.substring(0,400)}
                ...
            </div>
            <div className="is-pulled-right">
                <b>{username}</b>
                <p>date posted: {createdAt}</p>
                    
                <Link to={`/community/posts/${id}`}>comments: {commentCount}</Link>
            </div>
        </div>
    </div>
  )
}

export default PostCard