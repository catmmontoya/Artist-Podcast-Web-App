import Card from "../components/ShopCard"
import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import AdminCard from "../admins/AdminCard"

export default function Home() {
    const [items, setItems] = useState([])

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const adminId = useSelector(state => state.adminId)

let cards = async () => {axios.get("/api/items")
.then((res) => {
    setItems(res.data)
})
}

useEffect(() => {cards()}, [])


const handleCancel = () => {
    setPicture(item.picture);
    setItemName(item.itemName);
    setPrice(item.price)
    setIsEditing(false)
}

const myContent = items.map((item) => {
    if(!adminId) {
        return <Card item={item} key={item.itemId} />
    } else {
        return <AdminCard setItems={setItems} item={item} key={item.itemId} />
    }
})


return (
<>
    <div>
        <h4>Welcome! This is home for my art and thoughts, as well as a place for you to find other artists like me</h4>
    </div>
    {myContent}
    </>
)
}