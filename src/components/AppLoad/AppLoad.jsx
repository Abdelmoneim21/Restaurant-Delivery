import { assets } from "../../assets/assets";

export default function AppLoad() {
  return (
    <div className="AppLoad mt-[50px] mb-[30px]">
      <p className="text-center text-4xl text-[#555]">
        For Better Experience Download <br></br>Tomato App
      </p>
      <div className="images sm:flex mt-[50px] justify-center gap-[20px]">
        <img
          src={assets.play_store}
          alt="playstore"
          className="pointer w-[200px] hover:scale-110  m-auto sm:m-0 transition"
        />
        <img
          src={assets.app_store}
          alt="play Store"
          className="pointer w-[200px] hover:scale-110 m-auto sm:m-0 transition"
        />
      </div>
    </div>
  );
}
