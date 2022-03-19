import React from 'react'
import { useGetPostByIdQuery } from "../services/Post";


const Get_Single_Data = () => {

    const responseInfo = useGetPostByIdQuery(11);

    return (
        <>{/* // Get Single Data */}
            <div className="App">
                <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
                <h2>
                    {responseInfo.data?.id} {responseInfo.data?.title}
                </h2>
                <p>{responseInfo.data?.body}</p>
            </div>
        </>
    )
}

export default Get_Single_Data