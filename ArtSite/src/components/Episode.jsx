import { useSelector } from "react-redux"
import { useState } from "react"
import axios from "axios"

function Episode({ episode, setEpisodes }) {
const userId = useSelector((state) => state.userId)
const adminId = useSelector((state) => state.adminId)

const [newComment, setNewComment] = useState("")
const [isCommenting, setIsCommenting] = useState(false)
const [localEpisode, setLocalEpisode] = useState(episode)

const commentMode = () => setIsCommenting(true)

const comments = localEpisode.comments.map((comment) => {
  return (
    <>
  <li className="comment">{comment.input}</li>
  <p className="by-user">Left by user: {comment.user.username}</p>
    </>
  )
})

const handleSubmit = (e) => {
  e.preventDefault();
  const bodyObj = {
    episodeId: episode.episodeId,
    user: userId,
    comment: newComment,
  }

  axios.post("/api/addEpisodeComment", bodyObj) 
    .then((res) => {
      setIsCommenting(false)
      setLocalEpisode(res.data)
    })
  }

  const handleDelete = async () => {axios.delete(`/api/episode/delete/${episode.episodeId}`)
  .then((res) => {
    setEpisodes(res.data.allEpisodes)
  })
}

  return (
<>
    <div className="ep-card">
      <h2>{episode.episodeName}</h2>
      <p>{episode.episodeDescription}</p>
    </div>
    {adminId &&
    <button className="img-btn" onClick={handleDelete}>Delete</button>
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
    </>
  )
}

export default Episode