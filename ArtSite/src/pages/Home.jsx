import Card from "../components/ShopCard"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Home() {
    const [items, setItems] = useState([])

let cards = async () => {axios.get("/api/items")
.then((res) => {
    setItems(res.data)
})
}

useEffect(() => {cards()}, [])

const myItems = items.map((item) => <Card item={item} key={item.itemId} />)

return (
<>
    <div>
        <h4>Welcome! This is home for my art and thoughts, as well as a place for you to find other artists like me</h4>
    </div>
    {myItems}
    </>
)
}