// import React, {useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom';

// export default function Post() {
//     const {id} = useParams(); //const id= userParams().id;
//     const [post, setPost] = useState({
//         post: {}
//     });

//     async function fetchData(){
//         const response = fetch('https://jsonplaceholder.typicode.com/posts/' + id);
//         const data = await response.json();
//         setPost(data)

//     }


//     useEffect(() => {
//         // fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//         // .then((response) => response.json())
//         // .then((data) => setPost(data));
//         fetchData();
//         return () => {
//             //componentWillUnMount()
//         }
//     })

//     return (
//         <div>
//             <VideoVW1 />
//         </div>
//     )
// }