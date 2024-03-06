import { useSelector } from "react-redux"
import Card from "../components/ShopCard"

const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

function Cart() {
// const dispatch = useDispatch()
const cart = useSelector(state => state.cartItems);

//import Card and use select to grab cart and map over cart and create Card for each item
const myCart = cart.map((item) => <Card item={item} key={item.itemId} />)

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* <li key={item.id}>
{item.name} - <button onClick={() => removeFromCart(item.id)}>Remove</button>
</li> */}
      {myCart}
    </div>
  )
}

export default Cart