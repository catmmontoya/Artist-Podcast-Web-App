import axios from "axios"
import { useState } from "react"

function AdminCard({ item, setItems }) {

  const [picture, setPicture] = useState(item.picture)
  const [itemName, setItemName] = useState(item.itemName)
  const [price, setPrice] = useState(item.price)

  const [isEditing, setIsEditing] = useState(false)

  const editMode = () => setIsEditing(true)

  const handleSave = async () => {
    const bodyObj = {
        picture,
        itemName,
        price
    };
    axios.put(`/api/update/${item.itemId}`, bodyObj)
    .then((res) => {
        console.log("Success",
        res.data.message);
        setIsEditing(false);
        setItems(res.data.allItems)
    })
    .catch((error) => {
        console.log("Error", error)
    })
}

const handleCancel = () => {
  setPicture(item.picture);
  setItemName(item.itemName);
  setPrice(item.price)
  setIsEditing(false)
}

  const handleDelete = async () => {axios.delete(`/api/delete/${item.itemId}`)
    .then((res) => {
      setItems(res.data.allItems)
    })
  }

  return isEditing ? (
    <table>
      <tr className="shop-card">
          <td>{item.itemId}</td>
          <td>
              <input
              type="text"
              placeholder="Picture"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
              />
          </td>
          <td>
          <input
            type="text"
            placeholder="Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </td>
  
        <td>
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </td>
        <td>
      <button onClick={handleSave} className="img-btn">Save</button>
      <button onClick={handleCancel} className="img-btn" >Cancel</button> 
     </td>
      </tr>
      </table>
    ) : (
      <table>
      <tr>
      <td>{item.itemId}</td>
      <td>
      <img className="card-img" src={item.picture} />
      </td>
      <td className="img-name">{item.itemName}</td>
      <td className="img-price">{item.price}</td>
      <td className="btn-space">
      <button onClick={handleDelete} className="img-btn">Delete</button>
      <button onClick={editMode} className="img-btn">Edit</button>
      </td>
      </tr>
      </table>
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