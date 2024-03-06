import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

// const PostForm = () => {
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();

//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('/posts', {
//         title,
//         content,
//         author: user.email,
//       });
//       console.log('Post created successfully:', response.data);
//       setTitle('');
//       setContent('');
//       // Navigate to dashboard or update the post list
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="postTitle">
//         <Form.Label>Post Title</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="postContent">
//         <Form.Label>Post Content</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           placeholder="Enter content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Create Post
//       </Button>
//     </Form>
//   );
// };

// export default PostForm;


function CreatePostForm({ userEmail }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('/posts', {
          title,
          content,
          author: userEmail,
        });
        console.log('Post created successfully:', response.data);
        setTitle('');
        setContent('');
      } catch (error) {
        console.error('Error creating post:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
        <button type="submit">Create Post</button>
      </form>
    );
  }

  
  export {CreatePostForm}