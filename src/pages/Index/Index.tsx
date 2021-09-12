import React, { FunctionComponent, useState } from 'react'


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
interface IndexProps {
  posts: Post[]
}
 
const Index: FunctionComponent<IndexProps> = (props) => {
  return (
    <>
      <h1>All Posts</h1>
      {props.posts.map((post, idx) => 
        <div key={idx}>
          <div>
            {post.images.length > 0 ?
              <img src="" alt="" /> :
              <img src="" alt="" />
            }
          </div>
          <div>
            <h1>{post.subject}</h1>
          </div>
        </div>
      )}
    </>
  );
}
 
export default Index;