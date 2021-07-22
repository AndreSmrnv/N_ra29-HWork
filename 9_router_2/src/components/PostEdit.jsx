
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import {  
  Card,
  Button,
  Form,
  FloatingLabel
} from 'react-bootstrap';
import PostsContext from '../services/contexts/postsContext';


export default function EditPost({match}) {
  const {id} = match.params;
  const [posts, setPosts] = useContext(PostsContext);
  const [form, setForm] = useState({});  
  const post = posts.find(item => item.id === +id) || { id, content: 'notFound' };
  useEffect(()=> {
    setForm(prev => ({...prev, content: post.content  }))
  },[])
  const [response, setResponse] = useState(null);

  
  const history = useHistory()

  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async (data) => {
      console.log(data);
      await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      .then(
          (response) => (response.ok) ?  history.push(`/`) : setResponse(false) 
      )
    }
    postData({...form, id})
  }

  if (!post) return (
    <Redirect to="/" />
  );
  
  return (
    <Card className="text-center">
            <Card.Title>Редактировать публикацию</Card.Title>
            <Form  onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingTextarea2" label={`Отредактируй пост ${id}`}>
                <Form.Control 
                  onChange={handleChange}
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  name='content'
                  value={form.content}
                />
             </FloatingLabel>
             <Card.Footer className="text-muted">
              <Button variant="primary" onClick={handleSubmit}>Сохранить</Button>
              
            </Card.Footer>
            </Form>
      </Card>    
    
  )
}
