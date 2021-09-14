import React, { FunctionComponent } from 'react'
import NewPostForm from '../../components/NewPostForm/NewPostForm';

interface NewPostProps {
  
}
 
const NewPost: FunctionComponent<NewPostProps> = (props) => {
  return (
    <>
      <h1>Create a New Post!</h1>
      <NewPostForm />
    </>
  );
}
 
export default NewPost;