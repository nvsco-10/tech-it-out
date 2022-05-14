import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
// import "../css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getPosts } from '../utils/API'
import PostList from "../components/PostList";
import Auth from '../utils/auth';

export default function Main() {
  const [ searchInput, setSearchInput ] = useState('');
  const [ postList, setPostList ] = useState([]);
  const [ filteredPosts, setFilteredPosts ] = useState([]);

  const isLoggedIn = Auth.loggedIn() 

  const getAllPosts = async() => {
    const query = await getPosts();
    const result = await query.json();

    // console.log(result)
    setPostList(result)
    setFilteredPosts(result)

  }

  useEffect(() => {
    getAllPosts()
  }, [])

  const handleInputChange = async(e) => {
    setSearchInput(e.target.value)

    searchInput.length === 0 && setFilteredPosts(...postList)

    const filtered = postList.filter(post => {
      return post.title.toLowerCase().includes(searchInput.toLowerCase())
    })

    setFilteredPosts(filtered)
  }

  const filterByCategory = e => {
    const category = e.target.textContent

    const filtered = postList.filter(post => {
      return post.category.toLowerCase().includes(category.toLowerCase())
    })

    setFilteredPosts(filtered)
  }

  return (
    <div className="Community">
      <div>
        <Header></Header>
      </div>

      <div>
        <div className="section">
          <h1 className="title has-text-centered">EXPLORE THE COMMUNITY</h1>
          {/* SEARCH BAR */}
          <input
          className="search"
            type="text"
            value={searchInput}
            placeholder="search"
            onChange={handleInputChange} 
          />
        </div>

        <div className="section2 has-text-centered">
          {isLoggedIn ? (
            <Link to={'/community/newpost'}>
              <button className="button is-warning">CREATE A POST</button>
            </Link>) :
            (
              <p><a href="/login">Login</a> to create a post.</p>
            )
          }
          <div className="">
            <button className="button m-4 is-info" onClick={filterByCategory}>SHOW OFF</button>
            <button className="button m-4 is-danger" onClick={filterByCategory}>HELP ME</button>
            <button className="button m-4 is-warning" onClick={filterByCategory}>MENTORSHIP</button>
            <button className="button m-4 is-success" onClick={filterByCategory}>BUDDY</button>
            <p>FILTER:</p>
          </div>

          {/* POSTS GO HERE  */}
          
          {!filteredPosts.length ? 
              <p>No posts found..</p> : 
              <PostList posts={filteredPosts} />
            }
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
