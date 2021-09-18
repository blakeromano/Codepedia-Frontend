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

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name='subject' value={formData.subject} onChange={e => handleInputChange(e)} />
        <textarea name="info" onChange={e => handleInputChange(e)} cols={90} rows={30} value={formData.info}></textarea>
        {formData.images.map(img => 
          <>
          
          </>
        )}
        {formData.videos.map(vid => 
          <>

          </>
        )}
        <button type="button" onClick={() => {
          let updateFormData: any = {...formData}
          updateFormData.images.push('')
          setFormData(updateFormData)
          }} >Add Image</button>
        <button type='button' onClick={() => {
          let updateFormData: any = {...formData}
          updateFormData.videos.push('')
          setFormData(updateFormData)
          }}>Add Video</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
 
export default NewPostForm;