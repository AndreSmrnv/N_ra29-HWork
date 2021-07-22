/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import {  
  Card,
  Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PostsContext from '../services/contexts/postsContext';



import { useHistory } from 'react-router-dom';

export default function Post({ match }) {
  const [posts, setPosts] = useContext(PostsContext);
  const history = useHistory();
  const { id } = match.params;
  const post = posts.find(item => item.id === +id)

  
  const [response, setResponse] = useState(null);

  const handleEdit = (e) => {
    history.push(`/posts/${id}/edit`)
  }

  const handleDel = (e) => {
     
    const delData = async (id) => {
      await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        })
        .then(
          (response) => (response.ok) ? history.push(`/`) : setResponse(false)
        )
    }
    delData(id);
  }
  
  
  if (!post) return (
    <Redirect to="/" />
    );
  
  return (
    <Card className="text-center">
            <Card.Title>Post id: { post.id}</Card.Title>
            <Card.Text>
              {post.content}
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
      <Card.Footer className="text-muted">
        <Button variant="primary " onClick={ handleEdit}>Изменить</Button>
        <Button variant="secondary" onClick={ handleDel}>Удалить</Button>
      </Card.Footer>
    </Card>    
  )
}
 
