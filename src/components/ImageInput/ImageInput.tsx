import React, { FC } from 'react'

interface ImageInputProps {
  idx: number,
  handleChangeImage: Function,
  image: string,
  deleteImageInput: Function,
}
 
const ImageInput: FC<ImageInputProps> = (props) => {

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChangeImage(props.idx, evt.target.value)
  }

  return (
    <>
     <label>Image</label>
      <input onChange={handleChange} type="url" required  value={props.image} />
      <button type="button" onClick={() => props.deleteImageInput(props.idx)}>Cancel</button>
    </>
  );
}
 
export default ImageInput;