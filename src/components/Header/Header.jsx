export default function Header() {
  return (
    <div className="header h-[70vh] m-auto my-[3%] w-[90%] max-w-screen-xl bg-[url('/header_img.png')] bg-no-repeat bg-cover relative flex items-center justify-center">
      <div className="header-content absolute top-[30%] md:top-[40%] px-4 sm:px-6 md:px-10 text-white text-center md:text-left lg:w-[60%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Order Your Favourite Food Here
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#eee] mb-6">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="p-4 border-2 border-[#ff7050] rounded-full bg-[#fff4f2] text-black hover:bg-[#ff4c24] hover:text-white transition duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
}
