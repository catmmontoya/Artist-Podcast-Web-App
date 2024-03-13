import { useSelector } from "react-redux"
import Card from "../components/ShopCard"
import Footer from "../components/Footer"


function Cart() {
  const cart = useSelector(state => state.cartItems);
  

//import Card and use select to grab cart and map over cart and create Card for each item
  const myCart = cart.map((item) => <Card item={item} key={item.itemId} inCart={true} />)

  return (
    <>
    <div>
      <h2 className="cart">Shopping Cart</h2>
      {myCart}
    </div>
    <Footer />
    </>
  )
}

export default Cart