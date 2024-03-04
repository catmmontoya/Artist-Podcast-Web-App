import BlogPost from "../components/BlogPost"
import axios from "axios"
import { useState, useEffect } from "react"

function Blog() {
    const [posts, setPosts] = useState([])

    let blogPosts = async () => {axios.get("/api/blog")
    .then((res) => {
        setPosts(res.data)
    })
    }
    
    useEffect(() => {blogPosts()}, [])
    
    const myPosts = posts.map((post) => <BlogPost post={post} key={post.postId} />)

  return (
    <div>
        <h4>A glimpse of what I've been working on and whose art I've been loving! Please respect the work creatives have put out into the world. Good vibes only</h4>
        {myPosts}
    </div>
  )
}

export default Blog