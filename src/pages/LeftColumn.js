import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/userContext';
import axios from 'axios';

function LeftColumn({ onSuccess }) {
  const { user } = useContext(UserContext);
  const [postData, setPostData] = useState({ title: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
      const response = await axios.post('/posts', {
        title: postData.title,
        content: postData.content,
        id: user.id ,
        name:user.name
        // Assuming user object contains user details
      });
      console.log('New post created:', response.data);
      // Optionally, you can reset the form after successful submission
      setPostData({ title: '', content: '' });
      onSuccess();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
        {user && <h2>Hi {user.name}</h2>}
         <h2>"Got something?"</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPostTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title"
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formPostContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter post content"
                value={postData.content}
                onChange={(e) => setPostData({ ...postData, content: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Post
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LeftColumn;
