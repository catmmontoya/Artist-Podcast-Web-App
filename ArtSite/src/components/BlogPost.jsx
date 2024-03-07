import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"

function BlogPost({ post, comment, user }) {
  const userId = useSelector((state) => state.userId)
  const dispatch = useDispatch()
  const [newComment, setNewComment] = useState("")

  const comments = post.comments.map((comment, index) => {
    return (
      <>
    <li key={index}>{comment.input}</li>
    <li>Left by user: {comment.user.username}</li>
      </>
    )
  })

  const handleSubmit = async () => {
    const bodyObj = {
      input: newComment,
    }

    axios.post("/api/addComment", bodyObj) 
      .then((res) => {
        setNewComment("")
      })
    }
  

  return (
    <>
    <div className="ep-card">
      <h2>{post.postName}</h2>
      <p>{post.postText}</p>
    </div>
    <ul className="comments">{comments}</ul>
    {userId &&
    <>
    <input 
    placeholder="Comment here"
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    />
    <button onClick={handleSubmit} className="img-btn">Add Comment</button>
    </>
    }
    </>       
  )
}

export default BlogPost