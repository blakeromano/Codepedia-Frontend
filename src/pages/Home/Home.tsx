import React, { useState, useEffect, FunctionComponent } from 'react'
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
interface HomeProps {
  posts?: Post[]
}
 
const Home: FunctionComponent<HomeProps> = (props) => {
  return (
    <>
    
    </>
  );
}
 
export default Home;