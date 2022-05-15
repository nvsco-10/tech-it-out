import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../utils/API";

const PostCard = ({
  id,
  title,
  content,
  username,
  category,
  createdAt,
  commentCount,
  modify,
}) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const type = e.target.textContent;

    if (type === "delete") {
      deletePost(id);
      window.location.reload(false);
    }

    type === "edit" && navigate(`/community/posts/edit/${id}`);
  };

  return (
    <div className="community-cards card mb-6">
      <header className="header">
        <div className="column">
          <Link
            className="post-title is-capitalized is-pulled-left"
            to={`/community/posts/${id}`}
          >
            <p className="">{title}</p>
          </Link>
        </div>

        <div className="column post-up">
          <span className="category">category: {category}</span>
          <p className=" is-pulled-right">date posted: {createdAt}</p>
        </div>
      </header>

      <div className="card-content">
        <div className="content has-text-justified pl-5">
          {/* limit post overview to 400 characters */}
          {content.substring(0, 400)}
          ...
        </div>

        <div>
          <div className="post-bottom">
            <b>{username}</b>

            <Link className="to-comments is-block" to={`/community/posts/${id}`}>comments: {commentCount}</Link>
          </div>
          {/* if modify is true, show edit and delete buttons. Shows up only on the profile page */}
          {modify && (
            <div className="mt-4">
              <button className="button is-warning mr-4" onClick={handleSubmit}>edit</button>
              <button className="button is-danger" onClick={handleSubmit}>delete</button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default PostCard;
