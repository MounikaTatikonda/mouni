import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// import { IMAGESDATA } from "./imagesdata";

{/*import { Product } from "./product";*/}

function Pic2({addToCart}){
const IMAGESDATA4=[
{
 id:1,
 productName:"blue frok",
 price:510,
 productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRq8IqkHRc8SYo3wybd1x9-NqT9nxvXhnYl__AmcaPvrbyKzHhC1xU7-qFf2HOQaCntgC9mNTH9Cocrcgb7itYpezE_XPhUeodIFSFv2hQlOLXeqveYhJ1PCQdtt0EtKq9ym96t&usqp=CAc"
 },
{
 id:2,
 productName:"Red frok",
 price:560,
 productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEEmuo5xpsZkBgm8KuRnIdJ-Mvn4FVIRBfd9up5Hu8jfYCFaxn6SBbDaRY-wnVDEcNJMuDyczkkzd31eLV_UfuBGB8PKDwICFI2E6NWOHdIoAVRyxP9Vwu9-oY_ecNGeuM-g&usqp=CAc"
 },
 {
id:3,
 productName:"Pink frog",
 price:550,
productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKa9Mmngq61nH3o6_HV7GX7UoIPAbPu3m9crnFQJD4SZdhcQgIDkXcd6YzHr0JvXHeLPBryONjinQCDl_YlCGqOYx-WWpqEjlTH4W8Xmy2oB-lvl-617DwyEQIxojbdJ5LZTs&usqp=CAc"
 },
 {
 id:4,
 productName:"Red dress",
 price:760,
 productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQpxylVQkeQkLyHMMRD1HCzPea7ZBVUsZ_C6VphmSesh8e8qkOsh9J0aaU6NzphqRgqp2TPetg9z-aY_tSybleQP0FUGW3Xc6gGTmo2aaAdGiW06Lu16a9R2M72rv-rxUr0A&usqp=CAc"
 },

];

 return(
<div className="uldiv">

<Navbar/>

<div className="products">
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

export default Pic2;