import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext"

function MiddleColumn() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState({});

  // Fetch all posts from the backend upon component mounting
  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  //handle comment
  const handleChange = (e, postId) => {
    const newText = e.target.value;
    setCommentText((prevTexts) => ({
      ...prevTexts,
      [postId]: newText,
    }));
  };

  // Get comment text for a specific post
  const getCommentText = (postId) => {
    return commentText[postId] || "";
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Filter posts based on search term
    const results = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  // Handle like button click
  // Handle like button click
  const handleLike = async (postId) => {
    const userId = user.id;
    try {
      const response = await axios.post(`/posts/${postId}/like`, { userId });
      const updatedPosts = posts.map((post) => {
        if (post._id === postId) {
          // Toggle like status based on whether the user has already liked the post
          if (post.likes.includes(user.id)) {
            return {
              ...post,
              likesCount: post.likesCount - 1,
              likes: post.likes.filter((userId) => userId !== user.id),
            };
          } else {
            return {
              ...post,
              likesCount: post.likesCount + 1,
              likes: [...post.likes, user.id],
            };
          }
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  // Handle comment button click
  const handleComment = async (postId) => {
    const comment = getCommentText(postId);
    console.log(postId, user.id, comment);
    try {
      const response = await axios.post(`/posts/${postId}/comment`, {
        name: user.name,
        text: comment,
      });
      // Assuming the response contains the updated post with the new comment added
      console.log(response.data);
      setPosts(
        posts.map((post) => (post._id === postId ? response.data.post : post))
      );
      setCommentText(""); // Clear the comment text input
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const toggleComments = (postId) => {
    setShowComments((prevShowComments) => ({
      ...prevShowComments,
      [postId]: !prevShowComments[postId],
    }));
  };

  return (
    <div className="middle-column">
      {/* Search form */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {/* Display search results or all posts */}
      {(searchResults.length > 0 ? searchResults : posts).map((post) => (
        <div key={post._id} className="post-card">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.content}</p>
          <></>
          <div className="post-actions">
           <div className="commentArea"> 
              <textarea
                className="comment-textarea"
                rows="1"
                value={getCommentText(post._id)}
                onChange={(e) => handleChange(e, post._id)}
                placeholder="Type your comment here..."
              />
              <button
                className="comment-btn"
                key={`comment_${post._id}`}
                type="button"
                onClick={() => handleComment(post._id)}
              >
                Comment
              </button>
            </div>
            {/*post.likes.length i used this before*/}
            <div className="like">
              
              <button
                className="like-btn"
                key={`like_${post._id}`}
                type="button"
                onClick={() => handleLike(post._id)}
              >
                ({post.likes?.length || 0}) Like
              </button>
              <button
                className="show-comments-btn"
                type="button"
                onClick={() => toggleComments(post._id)}
              >
              Comments({post.comments?.length || 0})
              </button>
            </div>
          </div>
          {/* Display comments if showComments is true */}
          {showComments[post._id] &&
            post.comments &&
            post.comments.length > 0 && (
              <div className="comments">
                <ul>
                  {post.comments.map((comment, index) => (
                    <li key={index}>
                      <strong>{comment.author}: </strong>
                      {comment.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      ))}
    </div>
  );
}

export default MiddleColumn;
