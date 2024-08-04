import {  FaHome, FaUserFriends } from "react-icons/fa";
import { CiSearch, CiHeart, CiSettings, CiLogout, CiLogin } from "react-icons/ci";
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
          <div className="w-full lg:w-[1000px] bg-[#eef3f4]  p-0">
            <div className="w-full lg:w-[1000px]">
              {/* nav bar */}
              <div className="flex justify-between w-full lg:w-[1000px] bg-base-100 ">
                <div className="w-full lg:w-[500px]">
                  <div className="flex lg:hidden text-xl text-blue-600">Logo</div>
                  <a className="hidden lg:flex">
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
                <div className="w-full lg:w-[200px]">
                 <div className="hidden lg:flex">
                 <div className="flex items-center gap-2">
                    <div className="text-2xl"><IoIosNotificationsOutline /></div>
                    {user ?   <button  onClick={logOut}>logout</button> :  <NavLink to="/login"><h1 className="flex items-center gap-2">Log in <span className="bg-[#feeceb] p-2 rounded-full"><CiLogout /></span></h1></NavLink>}
                  </div>
                 </div>
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-52">
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
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow">
                      <div className="flex  items-center text-right justify-items-end justify-end bg-blue-600 p-2 ">
                        <div className="pt-10 text-right flex flex-col justify-end w-full">
                        {
                          user?.photoURL ? <img className="rounded-full w-12 relative -right-36" src={user?.photoURL} /> : <img className="rounded-full w-12 relative -right-36" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        }
                        <div>
                         <p className="text-white font-bold mt-2">{user?.displayName}</p>
                         <br />
                        <p className="font-bold"> {user?.email}</p>
                        </div>
                        </div>
                      </div>
                    
                      <div className="space-y-2">
                      <NavLink
                  to="/"
                  className=" flex"
                  style={({ isActive }) =>
                    isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
                  }
                  >
                <p className="flex gap-4 items-center"><FaHome />Home</p>
                </NavLink>
              <NavLink to="new"
              className="flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              >  <p className="flex gap-4 items-center"><FaUserFriends />New Listing</p>
              </NavLink>
                <NavLink to="search"
              className="  flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <p className="flex gap-4 items-center"><CiSearch />Search</p>
                </NavLink>
                <NavLink to="about"
              className="  flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <p className="flex gap-4 items-center"><IoDocumentTextOutline />About</p>
                </NavLink>
                <NavLink to="favoutite"
              className=" flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <p className="flex gap-4 items-center"><CiHeart />Favourites</p>
                </NavLink>
                <hr />
                <NavLink to="help"
              className=" flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <p className="flex gap-4 items-center"><MdOutlineLiveHelp />Help Center</p>
                </NavLink>
                <NavLink to="setting"
              className="flex"
              style={({ isActive }) =>
                isActive ? { borderLeft: "2px solid", backgroundColor: "#d5e9fe" } : { fontWeight: "bold" }
              }
              > 
                <p className="flex gap-4 items-center"><CiSettings />Settings</p>
                </NavLink>
                <p>{user ?   <button className="flex items-center gap-2"  onClick={logOut}><CiLogin className="text-xl"/>logout</button> :  <NavLink to="/login"><h1 className="flex items-center gap-2">Log in <span className="bg-[#feeceb] p-2 rounded-full"><CiLogout /></span></h1></NavLink>}</p>
                      </div>
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
