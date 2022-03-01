import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching(){
    // const [posts, setPosts] = useState([]);
    const [posts, setPost] = useState({});
    const [id, setId] = useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res);
            setPost(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[id])

    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <div>{posts.title}</div>
            {/* <ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching;
