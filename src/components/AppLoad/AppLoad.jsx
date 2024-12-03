import { assets } from "../../assets/assets";

export default function AppLoad() {
  return (
    <div className="AppLoad mt-[50px] mb-[30px]">
      <p className="text-center text-4xl text-[#555]">
        For Better Experience Download <br></br>Tomato App
      </p>
      <div className="images md:flex mt-[50px] justify-center gap-[30px]">
        <img
          src={assets.play_store}
          alt="playstore"
          className="pointer max-w-[250px] hover:w-[250px] m-auto"
        />
        <img
          src={assets.app_store}
          alt="play Store"
          className="pointer hover:w-[250px] m-auto"
        />
      </div>
    </div>
  );
}
