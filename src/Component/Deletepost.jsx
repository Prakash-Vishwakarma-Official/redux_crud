import React from 'react'
import { useDeletePostMutation } from "../services/Post";


const Deletepost = () => {

    const [deletePost] = useDeletePostMutation()

    return (
        <>
            {/* Delete Data */}
            <div className="App">
                <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
                <button onClick={() => { deletePost(2) }}>Delete Post</button>
            </div>
        </>
    )
}

export default Deletepost