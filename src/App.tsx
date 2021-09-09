import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as postServices from './services/postServices'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Index from './pages/Index/Index';
import Details from './pages/Details/Details';
import NewPost from './pages/NewPost/NewPost';
import EditPost from './pages/EditPost/EditPost';
import './App.css';

interface Post {
  subject: String,
  info: String,
  editedNum: Number,
  helpful: Number,
  notHelpful: Number,
  images: String[],
  videos: String[],
  createdAt: String,
  updatedAt: String
}


function App() {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    postServices.index()
    .then(posts => {
      setPosts(posts)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Route exact path='/' 
      render={() => <Home  />}
      />
      <Route exact path='/all' 
      render={() => <Index />}
      />
      <Route exact path='/new' 
      render={() => <NewPost />}
      />
      <Route exact path='/edit/:id' 
      render={() => <EditPost />}
      />
      <Route exact path='/:id' 
      render={() => <Details />}
      />
    </>
  );
}

export default App;
