function Episode({ episode }) {

  return (
<>
    <div>
      <p>{episode.episodeName}</p>
      <p>{episode.episodeDescription}</p>
    </div>
    </>
  )
}

export default Episode