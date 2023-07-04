import React from "react";
import { auth } from "./Firebase";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Pic1 from "./Pic1"
import Pic2 from "./Pic2"
import  color  from "./color.css";



function Dashboard({addToCart}){
const IMAGESDATA2=[
 
{
 id:1,
 productName:"Mobiles",

productImage:"https://m.media-amazon.com/images/I/41mDAtPMDKL._AC_UF226,226_FMjpg_.jpg",


 },
{
id:2,
 productName:"Sofa set",
productImage:"https://m.media-amazon.com/images/I/716UmyFOzNL._AC_UF226,226_FMjpg_.jpg"
 },
{
 id:3,
productName:"Camera",
 
productImage:"https://m.media-amazon.com/images/I/51UHoxzInpL._AC_UF226,226_FMjpg_.jpg"
},
 {
 id:4,
 productName:"Bluetooth",
productImage:"https://m.media-amazon.com/images/I/31RwE3ltrQL._AC_UF226,226_FMjpg_.jpg"
 },
 {
 id:5,
productName:"Toys",
 productImage:"https://images-eu.ssl-images-amazon.com/images/I/71BTkcTZSgL._AC_UL160_SR160,160_.jpg"
 },
 {
id:6,
 productName:"Shoes",
productImage:"https://images-eu.ssl-images-amazon.com/images/I/71hU5OqDITL._AC_UL100_SR100,100_.jpg"
 },
 {
 id:7,
 productName:"Laptops",
 productImage:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
 },
{
 id:8,
 productName:"Beauty items",
productImage:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
 },
{

id:9,

 productName:"Personal Items",
 productImage:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"

 },
];


 return(

<div className="uldiv">

<Navbar/>
{/*<ul className="ul">
 <li><Link to="/Pic1" className="li">Girls dresses</Link> </li>
 <li><Link to="/Pic2" className="li">Baby dresses</Link></li>
 <li><Link to="/Pic3" className="li">Mens Wear</Link></li>
 <li><Link to="/Pic4" className="li">Watches for girls</Link></li>
 </ul>*/}
<div className="products">

 {IMAGESDATA2.map((item)=>
(

<div className="images">

<div key={item.id} className="img1">

 <img src={item.productImage}/>

 <p><b>{item.productName}</b></p>

 <p className="addto-cart">{item.price}</p>

<button className="button" onClick={()=>addToCart(item)}>

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

export default Dashboard;

