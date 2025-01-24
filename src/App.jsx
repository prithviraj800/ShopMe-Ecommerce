import { BrowserRouter as Router, Routes, Route, Link, Form } from "react-router-dom";
import { useState } from "react";
import Projectnav from "./components/projectnav";
import Itemdetail from "./components/itemdetail";
import Productitem from "./components/productitem";
// import Projectfooter from "./components/Projectfooter";
import Projectlogin from "./components/Projectlogin";
import Man from "./components/Man";
import Woman from "./components/woman";
import Kids from "./components/kids";
import Cart from "./components/cart";

export default function App() {
  const [menu,setmenu] = useState(false)
  return (
    <Router>
      <div className="flex items-center justify-between px-10  w-full lg:h-16 md:h-16 sm:h-12 h-10 border-b-2 fixed bg-white">
        <Link to="/">
          <p className="font-bold  font-serif lg:flex md:flex sm:hidden hidden lg:text-2xl md:text-xl sm:text-sm block relative">
            Shop Me
          </p>
        </Link>
        <div className="relative">
          <div className="flex  lg:gap-10 md:gap-7 sm:hidden lg:flex md:flex hidden   font-sans font-semibold">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
 
          <div className={`${menu? "flex":"hidden"} absolute top-7 flex-col gap-2 font-bold sm:text-lg text-md text-black  sm:w-[10rem] w-[8] py-3 px-5 rounded-xl sm:-left-24 -left-16  flex md:hidden lg:hidden  backdrop-blur-sm  
          // `}>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <button onClick={()=>{setmenu(!menu)}}  className="flex md:hidden sm:-left-32  -left-16 -top-3 sm:-top-5 lg:top-0 md:top-0 absolute">
            <img src="https://th.bing.com/th/id/OIP.svBJWBQ6AfxCvUmZgkOj5AHaHa?rs=1&pid=ImgDetMain" alt="" className="sm:w-10 w-7" />
          </button>
        </div>

        <div>
          <input
            type="search"
            placeholder="Search..."
            className="lg:w-[15rem] lg:h-9 md:w-[12.5rem] md:h-7 sm:w-[10rem] sm:h-6  w-[9rem] h-5 bg-slate-300 rounded-full "
          />
        </div>
        <div className="flex items-center gap-6">
          <Link to="/projectlogin">
            <img
              src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
              alt=""
              className=" lg:w-16 md:w-16 sm:w-12 w-10"
            />
          </Link>
          <Link to="/cart">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTF3Mu0Ph_kvcmsg8mt6aaCK700O4wpRYHA&s"
              alt=""
              className=" lg:w-9 md:w-9 sm:w-7 w-5"
            />
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Projectnav />}></Route>
        <Route path="/itemdetail/:id" element={<Itemdetail />}></Route>
        <Route path="/productitem" element={<Productitem />}></Route>
        {/* <Route path="projectfooter" element={<Projectfooter />}></Route> */}
        <Route path="/projectlogin" element={<Projectlogin />}></Route>
        <Route path="/man" element={<Man />}></Route>
        <Route path="/woman" element={<Woman />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      {/* <footer>
        <Projectfooter />
      </footer> */}
    </Router>
  );
}
