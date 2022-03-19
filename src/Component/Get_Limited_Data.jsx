import React from "react";
import { useGetPostByLimitQuery } from "../services/Post";


const Get_Limited_Data = () => {

    const responseInfo = useGetPostByLimitQuery(5);

    return (
        <>
            {/* Get Limited Data */}
            <div className="App">
                <h1>Redux Toolkit - RTK Query (Get Limited  Data)</h1>
                {
                    responseInfo.data?.map((post, i) =>
                        <div key={i}>
                            <h2>{post.id} {post.title}</h2>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default Get_Limited_Data