import { mixitem } from "../data/mixitem";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Itemdetail() {
  const { id } = useParams();
  const data = mixitem[id];

  return (
    <div>
      <div className="pt-20 grid lg:grid-cols-3  md:grid-cols-2  ">
        <div className="flex flex-col items-center md:px-5 sm:px-1">
          <img
            src={data.image}
            alt=""
            className="w-[25rem] h-[30rem]  p-4 object-cover"
          />
          <div className="flex gap-5 p-4">
            <button className="bg-yellow-300 w-[11rem] h-10 font-bold rounded-md hover:bg-orange-300 duration-500">
              ADD CARD
            </button>
            <button className="bg-orange-400 w-[11rem] h-10 font-bold rounded-md hover:bg-orange-300 duration-500">
              BUY NOW
            </button>
          </div>
        </div>
        <div className=" bg-white p-4 h-[35rem] overflow-y-scroll lg:col-span-2">
          <p className="font-bold text-gray-400 py-1">{data.title}</p>
          <p className="line-clamp-1">{data.content}</p>
          <p className="text-green-500 font-semibold">{data.spacle}</p>
          <p className="font-bold">
            {data.price}{" "}
            <span className="line-through font-normal text-sm px-2">
              {data.noprice}
            </span>
          </p>

          <div>
            <p className="font-bold text-xl py-4">Colors</p>

            <div className="flex  gap-5">
              <div className="w-10 h-10 rounded-full border-black border-[0.01rem] bg-black"></div>
              <div className="w-10 h-10 rounded-full border-black border-[0.01rem] bg-red-600"></div>
              <div className="w-10 h-10 rounded-full border-black border-[0.01rem] bg-pink-500"></div>
              <div className="w-10 h-10 rounded-full border-black border-[0.01rem] bg-orange-600"></div>
              <div className="w-10 h-10 rounded-full border-black border-[0.01rem] bg-gray-500"></div>
              <div className="w-10 h-10 rounded-full border-black border-[0.01rem] bg-white"></div>
            </div>
          </div>
          <p className="py-5 font-bold text-xl">Available offers</p>
          <ul className="flex flex-col gap-3 border-b-4 py-4">
            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>5% Unlimited
                Cashback on Flipkart Axis Bank Credit CardT&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>10% off up to
                ₹750 on HDFC Bank Credit Card EMI on 3 months tenure. Min. Txn
                Value: ₹5000T&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>10% off up to
                ₹1,200 on HDFC Bank Credit Card EMI on 6 and 9 months tenure.
                Min Txn Value: ₹5000T&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>10% off up to
                ₹1,500 on HDFC Bank Credit Card EMI on 12months and above
                tenure. Min Txn Value:₹5000T&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>Flat ₹500 off
                on BOBCARD EMI Transactions, on orders of ₹15,000 and aboveT&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>10% off up to
                ₹1,500 on Federal Bank Credit Card EMI Transactions, on orders
                of ₹5,000 and aboveT&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>Flat ₹1000 off
                on One Credit Card EMI Transactions on orders of ₹10,000 and
                aboveT&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>10% off up to
                ₹1,500 on HDFC Bank Credit Card EMI on 12months and above
                tenure. Min Txn Value:₹5000T&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>10% off up to
                ₹1,500 on HDFC Bank Credit Card EMI on 12months and above
                tenure. Min Txn Value:₹5000T&C
              </p>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://th.bing.com/th/id/R.cebb63bd11ff045a63e8e8bf0184a93b?rik=%2bki5LNvDOG1iig&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tag-big-image-png-2400.png&ehk=4yFEAvVxBVm0uGx2mf%2fSHIcvZu%2fa77cPhtnjmnvBvSM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-4"
              />
              <p>
                <span className="font-semibold">Bank Offer</span>Extra ₹500 off
                on Federal Bank Credit Card EMI Transactions, on orders of
                ₹25,000 and aboveT&C
              </p>
            </li>
          </ul>

          <div className="flex items-center justify-between">
            <p className="font-bold text-xl py-4">Ratings & Reviews</p>
            <div className="flex items-center gap-5">
              <div className="w-16 bg-lime-500 h-5 rounded-full flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoARWgvjEkMdeXDDul4SlDg6LjQOZxXKwcMg&s"
                  alt=""
                  className="w-5 rounded-full object-cover"
                />
                <p className="font-bold">3.7</p>
              </div>
              <p>4,078 ratings and 187 reviews</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-gray-200 p-3 rounded-lg">
              <div className="flex items-center gap-5 font-semibold py-2">
                <div className="w-10 bg-lime-500 h-5 rounded-full flex items-center gap-1 ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoARWgvjEkMdeXDDul4SlDg6LjQOZxXKwcMg&s"
                    alt=""
                    className="w-5 rounded-full object-cover"
                  />
                  <p className="font-bold">5</p>
                </div>
                <p className="line-clamp-1">
                  Nice product.. go for it.. value for money product.. Thanks
                  Shop Me
                </p>
              </div>
              <p>Raj Kumar 2 months ago</p>
              <p>Certified Buyer, Dhanbad</p>
            </div>

            <div className="bg-gray-200 p-3 rounded-lg ">
              <div className="flex items-center gap-5 font-semibold py-2">
                <div className="w-10 bg-lime-500 h-5 rounded-full flex items-center gap-1 ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoARWgvjEkMdeXDDul4SlDg6LjQOZxXKwcMg&s"
                    alt=""
                    className="w-5 rounded-full object-cover"
                  />
                  <p className="font-bold">5</p>
                </div>
                <p>Nice febric much comfortable as gym wear</p>
              </div>
              <p>Vikas Upadhyay 4 months ago</p>
              <p>Certified Buyer, Dhanbad</p>
            </div>

            <div className="bg-gray-200 p-3 rounded-lg ">
              <div className="flex items-center gap-5 font-semibold py-2">
                <div className="w-10 bg-lime-500 h-5 rounded-full flex items-center gap-1 ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoARWgvjEkMdeXDDul4SlDg6LjQOZxXKwcMg&s"
                    alt=""
                    className="w-5 rounded-full object-cover"
                  />
                  <p className="font-bold">5</p>
                </div>
                <p>Good 👍😊😊</p>
              </div>
              <p>Md Imran 3 months ago</p>
              <p>Certified Buyer, Dhanbad</p>
            </div>
          </div>
          {/* <div className="">
            <div className="grid grid-cols-2   gap-6 px-2 py-5 ">
              {mixitem.map((item, index) => (
                <Link key={index} to={`/itemdetail/${index}`}>
                  <div className="hover:shadow-lg hover:shadow-gray-400 p-2 rounded-xl duration-500">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[25rem] h-[30rem] object-cover"
                    />
                    <div className="hover:scale-y-105 duration-500 bg-white">
                      <p className="font-bold text-gray-400 py-1">
                        {item.title}
                      </p>
                      <p className="line-clamp-1">{item.content}</p>
                      <p className="text-green-500 font-semibold">
                        {item.spacle}
                      </p>
                      <p className="font-bold">
                        {item.price}{" "}
                        <span className="line-through font-normal text-sm px-2">
                          {item.noprice}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}
        </div>
        
      </div>
      <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2   gap-6 py-5 ">
              {mixitem.map((item, index) => (
                <Link key={index} to={`/itemdetail/${index}` } className="flex items-center">
                  <div className="hover:shadow-lg hover:shadow-gray-400 p-2 rounded-xl duration-500">
                    <img
                      src={item.image}
                      alt=""
                      className="md:w-[16rem] md:h-[20rem] sm:w-[16rem] sm:h-[16rem] w-[11rem] h-[14rem] rounded-xl  object-cover"
                    />
                    <div className="hover:scale-y-105 duration-500 bg-white">
                      <p className="font-bold text-gray-400 py-1">
                        {item.title}
                      </p>
                      <p className="line-clamp-1">{item.content}</p>
                      <p className="text-green-500 font-semibold">
                        {item.spacle}
                      </p>
                      <p className="font-bold">
                        {item.price}{" "}
                        <span className="line-through font-normal text-sm px-2">
                          {item.noprice}
                        </span>
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
