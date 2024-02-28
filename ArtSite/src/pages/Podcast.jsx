import Episode from "../components/admins/Episode"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Podcast() {
    const [episodes, setEpisodes] = useState([])

    let epCards = async () => {
        await axios.get("/podcast")
            .then((res) => {
                setEpisodes(res.data)
            })
    }
    
    useEffect(() => {epCards()}, [])
    
    const myEpisodes = episodes.map((episode) => <Episode episode={episode} key={episode.episodeId} />)

    return (
        <div>
            <h4>Here's what I've been working and whose art I've been loving. Please respect the work creatives we have put out into the world!</h4>
            {myEpisodes}
        </div>
    )
}