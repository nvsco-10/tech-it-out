import PostCard from './PostCard'

const PostList = ({posts}) => {
  return (
    <>
        {posts.map(post => {
            return <PostCard 
                        key={post._id} 
                        id={post._id} 
                        title={post.title} 
                        content={post.content} 
                        category={post.category}
                        username={post.username}
                        createdAt={post.createdAt} 
                        commentCount={post.commentCount}
                    />
            }) 
        }   
    </>
  )
}

export default PostList