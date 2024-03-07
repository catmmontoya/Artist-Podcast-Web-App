import { useSelector } from "react-redux"

function Episode({ episode }) {
const userId = useSelector((state) => state.userId)

const comments = episode.comments.map((comment) => {
  return (
    <>
  <li>{comment.input}</li>
  <li>Left by user: {comment.user.username}</li>
    </>
  )
})

  return (
<>
    <div className="ep-card">
      <h2>{episode.episodeName}</h2>
      <p>{episode.episodeDescription}</p>
    </div>
    <ul className="comments">{comments}</ul>
    {userId &&
    <button className="img-btn">Add Comment</button>
}   
    </>
  )
}

export default Episode