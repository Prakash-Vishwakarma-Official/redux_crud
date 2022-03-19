import React from 'react'
import { useCreatePostMutation } from "../services/Post";


const Createpost = () => {

    const [createPost,{/* responseInfo */}] = useCreatePostMutation()
    
  const newPost = {
    title: 'This is New Title',
    body: 'This is New Body',
    userId: 1,
  }

  return (
    <>
     {/* Create Data */}
     <div className="App">
       <h1>Redux Toolkit - RTK Query (Create Data)</h1>
       <button onClick={() => { createPost(newPost) }}>CreatePost </button>
     </div>
    
    </>
  )
}

export default Createpost