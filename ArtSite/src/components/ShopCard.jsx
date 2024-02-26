function Card({ item }) {

  return (
    //gonna need an img here from the database, and then name and price
      <div className="shop-card">
        <img className="cardImg" src={item.picture} />
        <p>{item.itemName}</p>
        <p>${item.price}</p>
      </div>
  )
}

export default Card