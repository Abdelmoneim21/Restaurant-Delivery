
import { menu_list } from "../../assets/assets"
export default function ExploreMenu(){
    return(
        <div className="Explore-Menu " id="explore-menu">
            <h1 className="text-3xl font-bold p-9 md:px-40 mt-[20px] text-center md:text-start ">Explore Our Menu</h1>
            <p className="md:px-40 text-center md:text-start text-xl lg:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam, fuga sapiente quas aliquid ipsa tempora et quaerat amet quis?</p>
            <div className="explore-list grid lg:grid-cols-8 md:grid-cols-4 grid-cols-3 justify-center gap-9 text-center mt-[5%] w-[80%] m-auto ">
                {menu_list.map((item,index)=>{
                    return(
                        <div key={index} className="hover:text-[#f96728]">
                            <img src={item.menu_image} alt="menu-image" className="cursor-pointer"/>
                            <p className="mb-[50px] mt-[20px] text-lg cursor-pointer ">{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}