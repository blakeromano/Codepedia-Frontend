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
  updatedAt: String,
  _id: string,
}
interface IndexProps {
  posts: Post[]
}
 
const Index: FunctionComponent<IndexProps> = (props) => {
  return (
    <>
      <h1>All Posts</h1>
      {props.posts.map(post => 
        <div key={post._id}>
          <a href={`/${post._id}`}>
            <div>
              {post.images.length > 0 ?
                <img src="" alt="" /> :
                <img src="" alt="" />
              }
            </div>
            <div>
              <h1>{post.subject}</h1>
              {post.info.length > 250 ?
              <p>{post.info.substr(0, 250) + '...'}</p> :
              <p>{post.info}</p>
            }
          </div>
          </a>
        </div>
      )}
    </>
  );
}
 
export default Index;