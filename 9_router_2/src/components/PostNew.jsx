import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import {  
  Card,
  Button,
  Form,
  FloatingLabel
} from 'react-bootstrap';

export default function PostNew() {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async (data) => {
      await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      .then(
          (response) => (response.ok) ? setResponse(true) : setResponse(false) 
      )
    }
    postData({...form, id: 0})
    
  }

  const handleChange = (e) => {
    const {value} = e.target
    setForm(prev => ({...prev, content: value }))
  }

  if (!response)
    return (
      <Card className="text-center">
            <Card.Title>Новый пост</Card.Title>
            <Form  onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingTextarea2" label="Напиши новый пост">
                <Form.Control 
                  onChange={handleChange}
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  value={form.content}
                />
             </FloatingLabel>
             <Card.Footer className="text-muted">
              <Button variant="primary" onClick={handleSubmit}>Опубликовать</Button>
              
            </Card.Footer>
            </Form>
      </Card>    
     
    )

  return (<Redirect to="/"/>)
}