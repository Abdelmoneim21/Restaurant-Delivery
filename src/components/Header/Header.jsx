export default function Header(){
    return(
        <div className="header h-[70vh] m-auto my-[3%] w-[80%] bg-[url('/header_img.png')] bg-no-repeat bg-cover relative">
            <div className="header-content absolute md:top-[40%] sm:top-[30%]    ml-[10%] text-white lg:w-[50%] ">
                <h1 className="text-5xl mb-[5%] ">Order your Favourite Food Here</h1>
                <p className="text-[#eee]">choose from diverse menu featuring a delectable array of dishes creafted with the finest 
                    ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining 
                    experience, one delicious meal at a time.
                </p>
                <button className="p-4 border-2 border-[ff7050] mt-[10px] rounded-full bg-[#fff4f2] text-black hover:bg-[#ff4c24] hover:text-white">View Menu</button>
            </div>
        </div>
    )
}