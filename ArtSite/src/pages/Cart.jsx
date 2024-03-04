import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Card from "../components/ShopCard";

function Cart() {
// const dispatch = useDispatch()
const cart = useSelector(state => state.cart);

//import Card and use select to grab cart and map over cart and create Card for each item
const myCart = cart.map((item) => <Card item={item} key={item.itemId} />)

  return (
    <div>
      <h2>Shopping Cart</h2>
      {myCart}
    </div>
  )
}

export default Cart