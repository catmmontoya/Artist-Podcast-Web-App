import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

function Card({ item }) {
  const navigate = useNavigate();
  const userId = useSelector(state => state.userId);


  const handleClick = async () => {
    if (userId) {
      // await axios.post("/cart")
      navigate("/cart")
    } else {
      navigate("/signup")
    }
  }

  console.log(item)
  return (
      <div className="shop-card">
        <img className="card-img" src={item.picture} />
        <p className="img-name">{item.itemName}</p>
        <p className="img-price">${item.price}</p>
        <button onClick={handleClick} className="img-btn">Add To Cart</button>
      </div>
  )
}

export default Card