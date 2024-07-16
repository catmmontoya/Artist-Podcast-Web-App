import Episode from "../components/Episode"
import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

export default function Podcast() {
    const [episodes, setEpisodes] = useState([])
    const [episodeName, setEpisodeName] = useState("")
    const [episodeDescription, setEpisodeDescription] = useState("")
    const adminId = useSelector((state) => state.adminId)

    const [isEditing, setIsEditing] = useState(false)

    const editMode = () => setIsEditing(true)

    let epCards = async () => {axios.get("/api/podcast")
            .then((res) => {
                setEpisodes(res.data)
            })
    }

    const handleSave = async () => {
        const bodyObj = {
            episodeName,
            episodeDescription
        };

        try { 
            const res = await axios.post("/api/addEpisode", bodyObj);
            epCards(res.data)
            setIsEditing(false)
        } catch (error) {
            console.error("Error adding episode:", error);
        }
        
    }

    const handleCancel = () => {
        setEpisodeName(episodeName)
        setEpisodeDescription(episodeDescription)
        setIsEditing(false)
      }
    
    useEffect(() => {epCards()}, [])
    
    const myEpisodes = episodes.map((episode) => <Episode episode={episode} setEpisodes={setEpisodes} key={episode.episodeId} />)

    return (
        <div>
            <div className="pod-bio">
                <img className="pod-pic" src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg" />
                <p>This podcast is all about the ups and downs of life for us girly pops - exploring love, faith transitions, our bodies and minds, and community. Enjoy!</p>
            </div>
            {adminId && 
            <button className="img-btn" onClick={editMode}>Add Episode</button>
            }
             {isEditing &&
            <>
            <input value={episodeName} placeholder="Name" onChange={(e) => setEpisodeName(e.target.value)} /> 
            <textarea value={episodeDescription} placeholder="New Episode" onChange={(e) => setEpisodeDescription(e.target.value)} />
            <button className="img-btn" onClick={handleSave}>Save</button>
            <button className="img-btn" onClick={handleCancel}>Cancel</button>
            </>
            }
            {myEpisodes}
        </div>
    )
}