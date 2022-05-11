import React from 'react'

const PostCard = ({id, title, content, username, category, createdAt, commentCount}) => {
  return (
    <div className="card mb-6">
        <header className="card-header card-header-title has-background-grey-lighter">
            <div className="column">
                <p className=" has-text-primary-light">
                    <a
                    href="/post/1" // would actually be /post/id
                    className="has-text-black is-capitalized is-pulled-left"
                    >
                    {title}
                    </a>
                </p>
            </div>

            <div className="column">
                <span className="">{category}</span>
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