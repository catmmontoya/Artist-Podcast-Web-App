import Episode from "../components/Episode"
import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

export default function Podcast() {
    const [episodes, setEpisodes] = useState([])
    const adminId = useSelector((state) => state.adminId)

    let epCards = async () => {
        await axios.get("/api/podcast")
            .then((res) => {
                setEpisodes(res.data)
            })
    }
    
    useEffect(() => {epCards()}, [])
    
    const myEpisodes = episodes.map((episode) => <Episode episode={episode} key={episode.episodeId} />)

    return (
        <div>
            <h4>Here's what I've been working and whose art I've been loving. Please respect the work creatives we have put out into the world!</h4>
            {adminId && 
            <button>Add Episode</button>
            }
            {myEpisodes}
        </div>
    )
}