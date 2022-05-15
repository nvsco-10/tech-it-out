// TEST PAGE
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById, createPostComment } from "../utils/API";
import Auth from "../utils/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/main.scss";
import ReactMarkdown from "react-markdown";

const SinglePost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  const [commentData, setCommentData] = useState({
    comment: "",
    username: "",
  });

  const isLoggedIn = Auth.loggedIn();

  const getPost = async () => {
    const data = await getPostById(id);
    const result = await data.json();
    setPostData(result);
  };

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (!isLoggedIn) {
          return false;
        }

        const response = await Auth.getProfile();

        if (!response) {
          throw new Error("something went wrong!");
        }

        setCommentData({ ...commentData, username: response.data.username });
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = await createPostComment(commentData, id);

    if (!newComment) {
      throw new Error("something went wrong!");
    }

    console.log("comment added!");

    getPost();
    setCommentData({ ...commentData, comment: "" });
  };
  // TEST LAYOUT BELOW - CHANGE FUGLY STYLING
  return (
    <div className="SingleCommunity">
      <Header></Header>
      <div className="resource-container">
        <div className="singleresource-body">
          <p className="title is-1 is-capitalized">{postData.title}</p>
          <div className="community-body">
            <p className="category">category: {postData.category}</p>
            <p className="posted">posted by: {postData.username}</p>
            {/* Wrap in markdown component to render text markdown */}
            {/* Text has to be left-aligned to properly render code blocks */}
            <ReactMarkdown className="content has-text-left">{postData.content}</ReactMarkdown>
            <a target="_blank" rel="noopener noreferrer">
              {postData.link}
            </a>
          </div>
        </div>
      </div>

      <hr className="line" />

      <div className="resource-comments">
        <div className="hold-comments">
          {/* <h1 className="title">Comments</h1> */}
          <h1 className="title">Responses</h1>

          {/* Only logged in users can comment */}
          {isLoggedIn ? (
            <>
              <div className="add-comment">
                <input
                  name="comment"
                  type="text"
                  placeholder="add a comment"
                  value={commentData.comment}
                  onChange={handleInputChange}
                />
                <div className="button-holder">
                  <button className="button" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="login-to">
              <a className="mr-2" href="/login">Login</a> to post a comment
            </p>
          )}
        </div>
      </div>

      <div className="comment-holder">
        {postData.comments?.map((item) => {
          return (
            // key property must be added to parent
            // insert comment component below
            <div key={item.commentId}>
              <div className="comment-info">
                <p className="username">{item.username}</p>
                <p className="time">{item.createdAt}</p>
              </div>
              <p className="comment">{item.comment}</p>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SinglePost;
