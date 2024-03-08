import Card from "../components/ShopCard"
import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import AdminCard from "../admins/AdminCard"

export default function Home() {
    const [items, setItems] = useState([])
    const adminId = useSelector(state => state.adminId)

    const [isEditing, setIsEditing] = useState(false)

let cards = async () => {axios.get("/api/items")
.then((res) => {
    setItems(res.data)
})
}

useEffect(() => {cards()}, [])

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
    {adminId && 
            <button>Add Shop Item</button>
            }
            {/* {isEditing &&} */}
    {myContent}
    </>
)
}