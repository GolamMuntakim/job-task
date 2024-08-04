import {  FaHome, FaUserFriends } from "react-icons/fa";
import { CiSearch, CiHeart, CiSettings, CiLogout } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../src/App.css';
import {  NavLink, Outlet } from "react-router-dom";
import UseAuth from "./HomeComponent/UseAuth";

function App() {
  const {user, logOut} = UseAuth()
  // console.log(user)
  return (
    <>
      <div className="max-w-[1250px] p-0">
        <div className="flex  justify-center p-0">
          {/* sidebar  */}
        <div className="hidden lg:flex">
        <div className=" w-[210px] bg-white p-10">
            <h1 className="text-4xl  text-blue-500 text-center mt-10">Logo</h1>
            <div className="mt-8">
              <div className="space-y-4 w-[210px]">
              <NavLink
                  to="/"
                  className="w-[210px] p-2 flex"
                  style={({ isActive }) =>
                    isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
                  }
                  >
                <p className="flex gap-4 items-center"><FaHome />Home</p>
                </NavLink>
              <NavLink to="new"
              className="w-[210px] p-2 flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              >  <li className="flex gap-4 items-center"><FaUserFriends />New Listing</li>
              </NavLink>
                <NavLink to="search"
              className="w-[210px] p-2 flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <li className="flex gap-4 items-center"><CiSearch />Search</li>
                </NavLink>
                <NavLink to="about"
              className="w-[210px] p-2 flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <li className="flex gap-4 items-center"><IoDocumentTextOutline />About</li>
                </NavLink>
                <NavLink to="favoutite"
              className="w-[210px] p-2 flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <li className="flex gap-4 items-center"><CiHeart />Favourites</li>
                </NavLink>
                <hr />
                <NavLink to="help"
              className="w-[210px] p-2 flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <li className="flex gap-4 items-center"><MdOutlineLiveHelp />Help Center</li>
                </NavLink>
                <NavLink to="setting"
              className="w-[210px] p-2 flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <li className="flex gap-4 items-center"><CiSettings />Settings</li>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

          {/* main */}
          <div className="w-[1000px] bg-[#eef3f4]  p-0">
            <div className="w-[1000px]">
              {/* nav bar */}
              <div className="flex justify-between w-[1000px] bg-base-100 ">
                <div className="w-[500px]">
                  <a className=" ">
                    <div className="flex gap-4">
                      <div>
                        {
                          user?.photoURL ? <img className="rounded-full w-12" src={user?.photoURL} /> : <img className="rounded-full w-12" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        }
                      </div>
                      <div>
                        <h1>{user?.displayName}</h1>
                        <h1>{user?.email}</h1>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-[200px]">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl"><IoIosNotificationsOutline /></div>
                    {user ?   <button  onClick={logOut}>logout</button> :  <NavLink to="/login"><h1 className="flex items-center gap-2">Log in <span className="bg-[#feeceb] p-2 rounded-full"><CiLogout /></span></h1></NavLink>}
                   
                  
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
              <Outlet></Outlet>
             {/* <Home></Home> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
