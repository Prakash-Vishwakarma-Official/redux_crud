import React from 'react'
import { useUpdatePostMutation } from "../services/Post";


const Updatepostredux = () => {

    const [ updatePost, {/* responseInfo */ }] = useUpdatePostMutation()

    const updatePostData = {
        id: 1,
        title: 'This is Update Post Title',
        body: 'This is Update Post Body',
        userId: 1,
    }

    return (
        <>
            {/* Update Data */}
            <div className="App">
                <h1>Redux Toolkit - RTK Query (Update Data)</h1>
                <button onClick={() => { updatePost(updatePostData) }}>Update Post</button>
            </div>
        </>
    )
}

export default Updatepostredux