import { useState } from "react"
import {assets} from "../../assets/assets"

export default function Navbar(){

    const [menu,setMenu] = useState("Home")
    return(
        <div className="navbar grid grid-cols-3 items-center py-5">
             <img src={assets.logo} alt="logo" className="px-8" />
             <ul className="nav-menu flex justify-between w-[100%] cursor-pointer ">
                <li className={`cursor-pointer ${menu === "Home" ? "border-b-2 border-b-black" : ""}` } onClick={()=>{setMenu("Home")}}>Home</li>
                <li className={`${menu === "Menu" ? "border-b-2 border-b-black" : ""}` } onClick={()=>{setMenu("Menu")}}>Menu</li>
                <li className={`${menu === "Mobile-App" ? "border-b-2 border-b-black" : ""}` } onClick={()=>{setMenu("Mobile-App")}}>Mobile-App</li>
                <li className={`${menu === "Contact-Us" ? "border-b-2 border-b-black" : ""}` } onClick={()=>{setMenu("Contact-Us")}}>Contact-Us</li>
             </ul>
             <div className="nav-right flex justify-center items-center">
                <img src={assets.search_icon} alt="search" className="mr-10 pointer"/>
                <div className="nav-search-icon relative">
                    <img src={assets.basket_icon} alt="basket"className="mr-10" />
                    <div className="dot absolute min-h-[10px] min-w-[10px] border-r-[50%] rounded-2xl bg-[#ff4c24] top-[-8px] left-[16px] "></div>
                </div>
                <button className="hover:bg-[#fff4f2] px-7 py-3 text-xl pointer border-[1px] border-[#ff4c24] rounded-3xl font-semibold transition">Sign In</button>
             </div>
        </div>
    )
}