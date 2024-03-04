import axios from "axios"
import { useState } from "react"

function AdminCard({ item, setItems }) {

  const [picture, setPicture] = useState(item.picture)
  const [itemName, setItemName] = (item.itemName)
  const [price, setPrice] = useState(item.price)

  const [isEditing, setIsEditing] = useState(false)

  const editMode = () => setIsEditing(true)

  const handleSave = () => {
    const bodyObj = {
        picture,
        itemName,
        price
    };
    axios.put(`/api/update/${item.itemId}`, bodyObj)
    .then((res) => {
        setIsEditing(false)
        message: "Success",
        res.data.message
    })
    // .catch((err) => {
    //     notify("danger", err.res.data.message)
    // })
}

const handleCancel = () => {
  setPicture(item.picture);
  setItemName(item.itemName);
  setPrice(item.price)
  setIsEditing(false)
}

  //const handleDelete to delete an item
  const handleDelete = async () => {axios.delete(`/api/delete/${item.itemId}`)
    .then((res) => {
      setItems(res.data.allItems)
    })
  }


  return isEditing ? (
      <tr className="shop-card">
          <td>{item.itemId}</td>
          <td>
              <input
              type="text"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
              />
          </td>
          <td>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </td>
  
        <td>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </td>
      <button onClick={handleSave} className="btn-img">Save</button> 
      </tr>
    ) : (
      <tr className="shop-card">
      <td>{item.itemId}</td>
      <td>
      <img className="card-img" src={item.picture} />
      </td>
      <td className="img-name">{item.itemName}</td>
      <td className="img-price">{item.price}</td>
      <button onClick={handleDelete} className="img-btn">Delete</button>
      <button onClick={editMode}>Edit</button>
      </tr>
    )
  }

  //   <div className="shop-card">
  // //   <img className="card-img" src={item.picture} />
  // //   <p className="img-name">{item.itemName}</p>
  // //   <p className="img-price">${item.price}</p>
  // //   <button onClick={handleDelete} className="img-btn">Delete Item</button>
  // // </div>
    
    {/* inputs that will update the state values */}
    {/* onSubmit/onClick -> handleSave */}
    

export default AdminCard