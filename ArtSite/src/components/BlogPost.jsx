import { useSelector } from "react-redux"
import { useState } from "react"
import axios from "axios"
import Footer from "../components/Footer"

function BlogPost({ post, setPosts }) {
  const userId = useSelector((state) => state.userId)
  const adminId = useSelector((state) => state.adminId)

  const [newComment, setNewComment] = useState("")
  const [isCommenting, setIsCommenting] = useState(false)
  const [localPost, setLocalPost] = useState(post)

  const commentMode = () => setIsCommenting(true)

  const comments = localPost.comments.map((comment) => {
    return (
      <>
    <li className="comment" key={comment.commentId}>{comment.input}</li>
    <p className="by-user">Left by user: {comment.user.username}</p>
      </>
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyObj = {
      postId: post.postId,
      user: userId,
      comment: newComment,
    }

    axios.post("/api/addComment", bodyObj) 
      .then((res) => {
        setIsCommenting(false)
        setLocalPost(res.data)
      })
    }

    const handleDelete = async () => {
      axios.delete(`/api/post/delete/${post.postId}`)
      .then((res) => {
        setPosts(res.data.allBlogPosts)
      })
  }
  
  return (
    <>
    <div className="ep-card">
      <h2>{post.postName}</h2>
      <p>{post.postText}</p>
    </div>
    {adminId && 
          <button onClick={handleDelete} className="img-btn">Delete</button>
        }
    <p>Comments:</p>
    <ul className="comments">{comments}</ul>
    {userId &&
    <button onClick={commentMode} method="POST" className="img-btn">Add Comment</button>
    }
    {isCommenting && 
    <>
      <input 
    placeholder="Comment here"
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    />
    <button onClick={handleSubmit}>Submit</button>
    </>
}
<Footer />
    </>     
  )
}

export default BlogPost