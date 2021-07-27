import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {
  CardColumns,
  Card,
  Navbar,
  Container,
  
  Nav,

  Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PostsContext from './services/contexts/postsContext';
import PostNew from './components/PostNew';
import Post from './components/Post';
import Posts from './components/Posts';
import PostEdit from './components/PostEdit';

import { INITIAL_POSTS } from './services/constants/initPosts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);

  return (
    <PostsContext.Provider value={[posts, setPosts]}>
      <Router>
      
        <div className="App">
          <CardColumns>
            <Card className="text-end">
              <Navbar bg="dark" variant="dark">
                <Container>
                  <LinkContainer to="/">
                    <Navbar.Brand >My Posts</Navbar.Brand>
                  </LinkContainer>     
                  <Nav  className="justify-content-end" >
                      <LinkContainer to="/posts/new">
                        <Button>Создать пост</Button>
                      </LinkContainer>                
                  </Nav>
                </Container>
              </Navbar>
              
            </Card>
            
            <div>
              <Switch>
                <Route path="/posts/new" component={PostNew}></Route>
                <Route path="/posts/:id/edit" component={PostEdit}></Route>
                <Route path="/posts/:id" component={Post}></Route>
                <Route path="/" component={Posts}></Route>
              </Switch>
            </div>
          </CardColumns>    
        </div>
      </Router>
    </PostsContext.Provider>
  );
}

export default App;

