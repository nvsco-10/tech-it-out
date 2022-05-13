// TEST PAGE
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getResourceById, createComment } from "../utils/API";
import Auth from "../utils/auth";
// import "../css/main.scss
import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../images/laptop-colorful-stock-photo.jpg";

const SingleResource = () => {
  const { id } = useParams();
  const [resourceData, setResourceData] = useState({});
  const [commentData, setCommentData] = useState({
    comment: "",
    username: "",
  });

  const isLoggedIn = Auth.loggedIn();

  const getResource = async () => {
    const data = await getResourceById(id);
    const result = await data.json();
    setResourceData(result);
  };

  useEffect(() => {
    getResource();
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

        // setUserData(response.data);
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

    console.log(commentData);

    const newComment = await createComment(commentData, id);

    if (!newComment) {
      throw new Error("something went wrong!");
    }

    console.log("comment added!");

    getResource();
    setCommentData({ ...commentData, comment: "" });
  };
  // TEST LAYOUT BELOW - CHANGE FUGLY STYLING
  return (
    <div className="SingleResource">
      <Header></Header>

      <div className="resource-container">
        <img src={image} />

        <div className="singleresource-body">
          <h1 className="title">{resourceData.name}</h1>
          <div className="filter">
            <p className="button is-danger mr-2">{resourceData.type}</p>
            <p className="button is-success ml-2">{resourceData.level}</p>
          </div>
          <div className="description-body">
            <p className="resource-description">{resourceData.description}</p>
            <a
              href={resourceData.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Link: {resourceData.link}
            </a>
          </div>
        </div>
      </div>

      <hr className="line" />

      <div className="resource-comments">
        <div className="hold-comments">
          <h1 className="title">Leave a Comment</h1>

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
                    POST
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="login-to">
              <a href="/login">Login</a>&nbsp;to post a comment
            </p>
          )}
        </div>
      </div>

      <div className="comment-holder">
        {resourceData.comments?.map((item) => {
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

export default SingleResource;
