import Card from "../components/ShopCard"
import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import AdminCard from "../admins/AdminCard"
import Footer from "../components/Footer"

export default function Home() {
    const [items, setItems] = useState([])
    const [picture, setPicture] = useState([])
    const [itemName, setItemName] = useState([])
    const [price, setPrice] = useState([])
    const adminId = useSelector(state => state.adminId)

    const [isEditing, setIsEditing] = useState(false)

    const editMode = () => setIsEditing(true)

    let cards = async () => {axios.get("/api/items")
    .then((res) => {
        console.log(res.data)
        setItems(res.data)
    })
    }

    const myContent = items.map((item) => {
        if(!adminId) {
            return <Card item={item} key={item.itemId} />
        } else {
            return <AdminCard setItems={setItems} item={item} key={item.itemId} />
        }
    })

    const handleSave = async () => {
        const bodyObj = {
            picture,
            itemName,
            price
        }

        await axios.post("/api/addItem", bodyObj) 
        .then((res) => {
            cards()
            setIsEditing(false)
        })
    }

    const handleCancel = () => {
        setPicture(picture);
        setItemName(itemName);
        setPrice(price)
        setIsEditing(false)
    }

    useEffect(() => {cards()}, [])

    return (
    <>
        <div>
            <h4>Welcome! This is home for my art and thoughts, as well as a place for you to find other artists like me</h4>
        </div>
        <div className="shop-main">
        {adminId && 
                <button className="img-btn" onClick={editMode}>Add Shop Item</button>
            }
            {isEditing &&
                <>
                <input value={picture} placeholder="Pic here" onChange={(e) => setPicture(e.target.value)} /> 
                <input value={itemName} placeholder="Name" onChange={(e) => setItemName(e.target.value)} />
                <input value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                <button className="img-btn" onClick={handleSave}>Save</button>
                <button className="img-btn" onClick={handleCancel}>Cancel</button>
                </>
                }  
                {myContent}
                </div>
                <Footer />
        </>
    )
}