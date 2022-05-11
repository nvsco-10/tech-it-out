import { Link } from "react-router-dom";

const PostCard = ({id, title, content, username, category, createdAt, commentCount, modify}) => {
  return (
    <div className="card mb-6">
        <header className="card-header card-header-title has-background-grey-lighter">
            <div className="column">
                <Link to={`/community/posts/${id}`}>
                    <p className=" has-text-primary-light">
                        <a
                        href=""
                        className="has-text-black is-capitalized is-pulled-left"
                        >
                        {title}
                        </a>
                    </p>
                </Link>
            </div>

            <div className="column">
                <span className="">{category}</span>
                {/* if modify is true, show edit and delete buttons. Shows up only on the profile page */}
                {modify && (
                    <>
                        <button>edit</button>
                        <button>delete</button>
                    </>
                )}
            </div>
        </header>

        <div className="card-content">
            <div className="content has-text-justified">
                {content}
            </div>
            <div className="is-pulled-right">
                <b>{username}</b>
                <p>date posted: {createdAt}</p>
                    
                <a href="#">comments: {commentCount}</a>
            </div>
        </div>
    </div>
  )
}

export default PostCard