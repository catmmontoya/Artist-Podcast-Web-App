import BlogPost from "../components/BlogPost"
import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

function Blog() {
    const [posts, setPosts] = useState([])
    const [postName, setPostName] = useState("")
    const [postText, setPostText] = useState("")
    const adminId = useSelector((state) => state.adminId)

    const [isEditing, setIsEditing] = useState(false)

    const editMode = () => setIsEditing(true)
 
    let blogPosts = async () => {axios.get("/api/blog")
    .then((res) => {
        setPosts(res.data)
    })
    }
    
    const handleSave = async () => {
      const bodyObj = {
        postName,
        postText
      }
    
      await axios.post("/api/addPost", bodyObj)
      .then((res) => {
      blogPosts()
      setIsEditing(false)
      })
    }

    const handleCancel = () => {
      setPostName(postName)
      setPostText(postText)
      setIsEditing(false)
    }

    useEffect(() => {blogPosts()}, [])
    
    const myPosts = posts.map((post) => <BlogPost setPosts={setPosts} post={post} key={post.postId} />)

  return (
    <div>
        <h4>A glimpse of what I've been working on and whose art I've been loving! Please respect the work creatives have put out into the world. Good vibes only</h4>
        {adminId && 
            <button className="img-btn" onClick={editMode}>Add Post</button>
            }
            {isEditing &&
            <>
            <input value={postName} placeholder="Name" onChange={(e) => setPostName(e.target.value)} /> 
            <textarea value={postText} placeholder="Speak your thoughts, girl" onChange={(e) => setPostText(e.target.value)} />
            <button className="img-btn" onClick={handleSave}>Save</button>
            <button className="img-btn" onClick={handleCancel}>Cancel</button>
            </>
            }
            {myPosts}
    </div>
  )
}

export default Blog