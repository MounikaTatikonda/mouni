import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Pic1 from "./Pic1"
import Pic2 from "./Pic2"
function Cart(props) {
 const { cart, setCart, addToCart } = props;
 const [cartTotal, setCartTotal] = useState(0);
 function removeFromCart(item) {
 setCart(cart.filter((i) => i.id !== item.id));
 }
 function increaseQuantity(item) {
 setCart(
 cart.map((i) =>
i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
)
 );
}
function decreaseQuantity(item) {
 setCart(
cart.map((i) =>
 i.id === item.id
? i.quantity === 1
? null
 : { ...i, quantity: i.quantity - 1 }
: i
 ).filter((i) => i !== null)
 );
 }

 function emptyCart() {
 setCart([]);
 }

const totalItems = cart?.length > 0 ? cart.reduce((total, item) => total + (item.quantity || 0), 0) : 0;
useEffect(() => {
 setCartTotal(
 cart && cart.length > 0
 ? cart.reduce((total, item) => {
 console.log(`Item price: {item.price}, Item quantity: {item.quantity}`);
return total + parseInt(item.price) * item.quantity;
 }, 0)
 : 0
 );
}, [cart]);
return (
 <div className="cart-page">
 <Navbar/>
 {!cart || cart.length === 0 ? (
 <p className="cart-head">Your Cart is Empty</p>
 ) : (
 <>
 <ul className="cart-itemsul">
{cart.map((item) => (
 <li type="none" key={item.id}>
 <div className="cart">
 <div className="cart-main">
 <img src={item.productImage} alt={item.productName} className="cart-image" /><br></br>
 <p className="cart-name">{item.productName} - ${item.price}</p>
 <button onClick={() => decreaseQuantity(item)} className="cart-button">
  -
</button>
 <button onClick={() => increaseQuantity(item)} className="cart-button">
 +
</button>
<button onClick={() => removeFromCart(item)} className="cart-button">
 Remove
 </button>
 </div>
 </div>
 </li>

 ))}
 </ul>
 <p className="cart-total-items">Total Items: {totalItems}</p>
 <p className="cart-total">Total Cost: 💲{cartTotal}</p>

 <button onClick={() => emptyCart()} className="cart-btn">

 Empty Cart

</button>
 </>

 )}
 </div>
 );

}






export default Cart;
