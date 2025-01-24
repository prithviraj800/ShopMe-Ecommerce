import { Link } from "react-router-dom"
import { man } from "../data/man"
export default function Man(){
    return(
        <div className="lg:py-16 md:py-16 sm:py-9 py-8">
            <img src="https://img.freepik.com/free-photo/portrait-tourist-takesoff-sunglasses-saying-wow-staring-impressed-camera-checking-out-cool_1258-158955.jpg?t=st=1736593361~exp=1736596961~hmac=2a76be0c63103ab01e70be3e799c1b44e78e6dc0e8373a34c7006a6c25a8443f&w=740" alt=""  className="md:w-full md:h-[20rem] object-cover"/>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2   gap-6 px-2 py-5 ">
          {man.map((item, index) => (
            <Link key={index} to={`/itemdetail/${index}`}>
              <div className="hover:shadow-lg hover:shadow-gray-400 p-2 rounded-xl duration-500">
                <img
                  src={item.image}
                  alt=""
                  className="md:w-[16rem] md:h-[20rem] sm:w-[16rem] sm:h-[16rem] w-[11rem] h-[14rem] rounded-xl  object-cover"
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
    )
}