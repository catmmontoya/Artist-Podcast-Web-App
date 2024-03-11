import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

function Card({ item, inCart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userId = useSelector(state => state.userId);
  
  const removeFromCart = () => {
    console.log("Hit remove from cart")
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item.itemId,
    })
  }

  const handleClick = async () => {
    // arrange an axios call to the server to add this item
    // to req.session.cart
    // axios.post('/api/add-to-cart', { item })
    if (userId) {
      dispatch({
        type: "ADD_TO_CART",
        payload: item
      })
      navigate("/cart")
    } else {
      navigate("/signup")
    }
  }

  return (
      <div className="shop-card">
        <img className="card-img" src={item.picture} />
        <p className="img-name">{item.itemName}</p>
        <p className="img-price">${item.price}</p>
        {inCart ? (
          <>
          <button onClick={removeFromCart} className="img-btn">Remove From Cart</button>
          <button className="img-btn">Buy Now</button>
          </>
        ) : (
          <button onClick={handleClick} className="img-btn">Add To Cart</button>
        )}
      </div>
  )
}

export default Card