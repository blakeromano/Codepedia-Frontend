import React, { FunctionComponent, useState } from 'react'

interface NewPostFormProps {
  
}
 
const NewPostForm: FunctionComponent<NewPostFormProps> = (props) => {

  const [formData, setFormData] = useState({
    subject: '',
    info: '',
    images: [],
    videos: [],
  })

  return (
    <>
      <form action="">
        <input type="text" name='subject' />
        <textarea name="info" cols={60} rows={15}></textarea>
        <button type="button">Add Image</button>
        <button type='button'>Add Video</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
 
export default NewPostForm;