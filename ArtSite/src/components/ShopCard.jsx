import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"

function Card({ item }) {
  const navigate = useNavigate();
  const userId = useSelector(state => state.userId);


  const handleClick = async () => {
    if (userId) {
      // await axios.post("/")
      navigate("/cart")
    } else {
      navigate("/signup")
    }
  }

  console.log(item)
  return (
    //gonna need an img here from the database, and then name and price
    //if there is a user, navigate to cart
    //if no user, navigate to sign up page
      <div className="shop-card">
        <img className="card-img" src={item.picture} />
        <p className="img-name">{item.itemName}</p>
        <p className="img-price">${item.price}</p>
        <button onClick={handleClick} className="img-btn">Add To Cart</button>
      
      </div>
  )
}

export default Card