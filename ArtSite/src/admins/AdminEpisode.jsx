function AdminEpisode({ episode }) {
  return (
    <div className="ep-card">
      <h2>{episode.episodeName}</h2>
      <p>{episode.episodeDescription}</p>
    </div>
  )
}

export default AdminEpisode