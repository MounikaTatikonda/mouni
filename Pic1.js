import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Pic from "./Pic.css";
// import { IMAGESDATA } from "./imagesdata";

{/*import { Product } from "./product";*/}

function Pic1({addToCart}){
const IMAGESDATA4=[
{
 id:1,
 productName:"Pink dress",
 price:510,
 productImage:"https://m.media-amazon.com/images/I/81p9GsCICIL._UY500_.jpg"
 },
{
 id:2,
 productName:"red dress",
 price:560,
 productImage:"https://m.media-amazon.com/images/I/611NXFeWX2L._UX569_.jpg"
 },
 {
id:3,
 productName:"Black dress",
 price:550,
productImage:"https://images-eu.ssl-images-amazon.com/images/I/710q7XPvjvL._AC_UL160_SR160,160_.jpg"
 },
 {
 id:4,
 productName:"Pink dress",
 price:760,
 productImage:"https://m.media-amazon.com/images/I/41veUiZWxXL.jpg"
 },
 ];

 return(
<div className="uldiv">

<Navbar/>

<div className="products1">
 {IMAGESDATA4.map((item)=>
 (
 <div className="images">

<div key={item.id} className="img1">
 <img src={item.productImage}/>

<p><b>{item.productName}</b></p>

 <p className="addto-cart">${item.price}</p>
<button className="addToCartBtn" onClick={()=>addToCart(item)}>

 Add to cart

</button>
</div>
 </div>
 )
 )}

</div>

</div>



);


}

export default Pic1;