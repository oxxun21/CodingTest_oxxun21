import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function BlogDetail() {
  const [post, setPost] = useState(undefined);
  const location = useLocation();
  const postNumber = location.pathname.split('/')[2]

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${postNumber}`)
      .then((json) => {
        setPost(json.data);
      })
      .catch((e) => {
        setPost(null)
      })
  }, [])

  // console.log(post);

  return (
    <div>
      {post === undefined ?
        <div>로딩중...</div> :
        post === null ? <div>404</div> : <div>{post.title}</div>
      }
    </div>
  )
}
