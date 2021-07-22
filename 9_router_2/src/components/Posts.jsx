import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {  
  Card,
  
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PostsContext from '../services/contexts/postsContext';

export default function Posts() {
  const [posts, setPosts] = useContext(PostsContext);
  

  useEffect(() => {
    const getData = async () => {
      await fetch(`${process.env.REACT_APP_API_URL}`)
        .then((response) => response.json())
        .then((result) => {
          setPosts([...result]);
        });
    }
    getData()
  }, [])


  // console.log(posts);

  if (posts && posts.length) return (
    <>
      {posts.map((post) => (
        <LinkContainer to={`/posts/${post.id}`} key={post.id} >
          <Card className="text-center">
            <Card.Title>Post id: { post.id}</Card.Title>
            <Card.Text>
              {post.content}
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>            
          </Card>
        </LinkContainer>
      ))}
    </>
    
  )
  return null
}
