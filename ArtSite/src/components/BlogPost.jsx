import { useSelector } from "react-redux"
import { useState } from "react"
import axios from "axios"

function BlogPost({ post, comment, user }) {
  const userId = useSelector((state) => state.userId)
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

    console.log(bodyObj)
    axios.post("/api/addComment", bodyObj) 
      .then((res) => {
        setIsCommenting(false)
        setLocalPost(res.data)
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
    </>     
  )
}

export default BlogPost