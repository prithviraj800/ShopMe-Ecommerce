import { Link } from "react-router-dom";
import { mixitem } from "../data/mixitem";

export default function Projectnav() {
  return (
    <div className="lg:py-14 md:py-14 sm:py-9 py-8 bg-white">
      
      <div className="">
        <img
          src="https://i.pinimg.com/originals/9a/71/6f/9a716f90fc2e24079b8960168d5ea089.jpg"
          alt=""
          className="lg:w-full lg:h-[30rem]  object-cover "
        />
      </div>
      <div className="py-1">
        <nav className="bg-black md:p-5 sm:p-3 p-2  lg:text-2xl md:text-xl sm:text-lg text-sm w-full  text-white ">
          <ul className="flex lg:gap-16 md:gap-12 sm:gap-10 gap-5 justify-center text-center ">
            <Link
              to="/"
              className="md:w-[6rem] sm:w-[5rem] w-[3rem] bg-white text-black font-bold font-serif rounded-s-full"
            >
              All
            </Link>
            <Link
              to="/man"
              className="md:w-[6rem] sm:w-[5rem] w-[3rem] bg-white text-black font-bold font-serif "
            >
              Man
            </Link>
            <Link
              to="/woman"
              className="md:w-[8rem] sm:w-[7rem] w-[4rem]  bg-white text-black font-bold font-serif "
            >
              Woman
            </Link>
            <Link
              to="/kids"
              className="md:w-[6rem] sm:w-[5rem] w-[3rem] bg-white text-black font-bold font-serif rounded-e-full"
            >
              Kid's
            </Link>
          </ul>
        </nav>
      </div>
      <img src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg" alt=""className="w-full lg:h-[20rem] object-cover" />

      <div>
        <div className="grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 lg:gap-6 md:gap-5 sm:gap-2 gap-3  lg:px-10 sm:px-3 px-5   lg:py-10 ">
          {mixitem.map((item, index) => (
            <Link key={index} to={`/itemdetail/${index}`}>
              <div className="hover:shadow-lg hover:shadow-gray-400 p-2 rounded-xl duration-500">
                <img
                  src={item.image}
                  alt=""
                  className="  lg:w-[16rem] lg:h-[20rem] md:w-[14rem] md:h-[18rem] sm:w-[15rem] sm:h-[18rem] w-[10rem] h-[14rem] rounded-xl object-cover"
                />
                <div className="hover:scale-y-105 duration-500 bg-white">
                  <p className="font-bold text-gray-400 py-1">{item.title}</p>
                  <p className="line-clamp-1">{item.content}</p>
                  <p className="text-green-500 font-semibold">{item.spacle}</p>
                  <p className="font-bold">
                    {item.price}{" "}
                    <span className="line-through font-normal text-sm px-2">
                      {item.noprice}
                    </span>
                    <span className="text-sm font-normal text-lime-600">{item.off}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
