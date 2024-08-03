import { IoLocationSharp } from "react-icons/io5";
import { FaCar, FaHome, FaUserFriends } from "react-icons/fa";
import { CiSearch, CiHeart, CiSettings, CiLogout } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import '../src/App.css';

function App() {


  return (
    <>
    <div className="max-w-[1250px] p-0">
    <div className="flex  justify-center p-0">
        {/* sidebar  */}
        <div className="w-[200px] bg-white p-10">
          <h1 className="text-4xl  text-blue-500 text-center mt-10">Logo</h1>
          <div className="mt-10">
            <ul className="space-y-4">
              <li className="flex gap-4 items-center"><FaHome />Home</li>
              <li className="flex gap-4 items-center"><FaUserFriends />New Listing</li>
              <li className="flex gap-4 items-center"><CiSearch />Search</li>
              <li className="flex gap-4 items-center"><IoDocumentTextOutline />About</li>
              <li className="flex gap-4 items-center"><CiHeart />Favourites</li>
              <hr />
              <li className="flex gap-4 items-center"><MdOutlineLiveHelp />Help Center</li>
              <li className="flex gap-4 items-center"><CiSettings />Settings</li>
            </ul>
          </div>
        </div>

        {/* main */}
        <div className="w-[1000px] bg-[#eef3f4] h-[2000px] p-0">
          <div className="w-[1000px]">
            <div className="flex justify-between w-[1000px] bg-base-100 ">
              <div className="w-[500px]">
                <a className=" ">
                  <div className="flex gap-4">
                    <div>
                      <img className="rounded-full w-12" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    <div>
                      <h1>Name</h1>
                      <h1>Email</h1>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-[200px]">
                <div className="flex items-center gap-2">
                  <div><IoIosNotificationsOutline /></div>
                  <h1 className="flex items-center gap-2">Log Out <span className="bg-[#feeceb] p-2 rounded-full"><CiLogout /></span></h1>
                </div>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                      <a>Parent</a>
                      <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                      </ul>
                    </li>
                    <li><a>Item 3</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-between bg-white mt-6 w-[960px] mx-auto p-4 rounded-md ">
              <div>
                <h1 className="font-semibold text-xl">I'am Looking For Massege Therapist Near</h1>
                <p className="mt-2">I'am using this site, I agree to be bound by the <a className="underline text-blue-700" href="#">Terms of service</a><br />
                  and <a className="underline text-blue-700" href="#">Privacy policy</a>
                </p>
                <div>
                  <label className="input w-[500px] input-bordered flex items-center gap-2 mt-4
                   bg-[#eef3f4]">
                    <input type="text" className="grow bg-[#eef3f4] " placeholder="ZIP Code or City Name" />
                    <p className="bg-[#146bcb] text-white p-2 rounded-xl">Go</p>
                  </label>
                </div>
              </div>
              <div>
                <img src="image/home.JPG" alt="" />
              </div>
            </div>

            <div>
              <h1 className="mt-2 ml-4 text-md font-bold">Featured Therapist</h1>
               <div className="w-[950px] z-0 bg-white mx-auto p-10 mt-4">
                <Swiper
                  slidesPerView={3}
                  centeredSlides={false}
                  slidesPerGroupSkip={2}
                  grabCursor={true}
                  keyboard={{
                    enabled: true,
                  }}
                  breakpoints={{
                    769: {
                      slidesPerView: 3,
                      slidesPerGroup: 2,
                    },
                  }}
                  navigation={true}
                  modules={[ Navigation]}
                  className="mySwiper w-[900px] h-[450px] mt-4 bg-white "
                >
                  <SwiperSlide>
                    <div className="w-56">
                      <figure>
                        <img
                        className="w-full h-[200px] rounded-md"
                          src="image/1.JPG"
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Alexender Cart</h2>
                        <p className="flex items-center gap-4"><IoLocationSharp />123 Elm Street, New york</p>
                        <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                        <div className="card-actions w-full">
                          <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="w-56">
                      <figure>
                        <img
                        className="w-full h-[200px] rounded-md"
                          src="image/1.JPG"
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Alexender Cart</h2>
                        <p className="flex items-center gap-4"><IoLocationSharp />123 Elm Street, New york</p>
                        <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                        <div className="card-actions w-full">
                          <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="  w-56 ">
                      <figure>
                        <img
                        className="w-full h-[200px] rounded-md"
                          src="image/1.JPG"
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Alexender Cart</h2>
                        <p className="flex items-center gap-4"><IoLocationSharp />123 Elm Street, New york</p>
                        <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                        <div className="card-actions w-full">
                          <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="  w-56 ">
                      <figure>
                        <img
                        className="w-full h-[200px] rounded-md"
                          src="image/1.JPG"
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Alexender Cart</h2>
                        <p className="flex items-center gap-4"><IoLocationSharp />123 Elm Street, New york</p>
                        <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                        <div className="card-actions w-full">
                          <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
