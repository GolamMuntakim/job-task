import { IoLocationSharp } from "react-icons/io5";
import { FaCar, FaHome, FaUserFriends } from "react-icons/fa";
import { CiSearch, CiHeart, CiSettings, CiLogout } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '.././App.css';
import { useState } from "react";

const Home = () => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
    return (
        <div>
             {/* featured therapist section */}
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
              {/* slider */}
              <div>
                <h1 className="mt-2 ml-4 text-3xl font-bold">Featured Therapist</h1>
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
                    modules={[Navigation]}
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
              {/* testimonial section */}
            
              <div className="flex w-[1000px] mt-10 ">
             
                <div className="w-[490px]">
                <div className="mt-4 ml-5">
                <h1 className="font-bold text-3xl">Featured Testimonial</h1>
              </div>
                <div className=" bg-white h-[500px] p-4 ml-4 rounded-md mt-4">
               
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div>
                        <div >
                          <div className="card card-side bg-base-100 shadow-md">
                            <figure>
                              <img
                            
                                src="/image/s1.JPG"
                                alt="Movie" />
                            </figure>
                            <div className="card-body">
                              <h2 className="flex items-center gap-2"><FaLocationDot /> 123 Elm Street,Newyork</h2>
                              <p>Healing body work <span className="text-blue-700"><i>by Cart</i></span></p>
                              <p className="text-sm">
                                Cart's healing bodywork massage was <br />
                                absolutely transformative. Their infuitive touch <br />
                                and deep understanding at {isReadMore && "muscle tension provided a deeply relaxing experience that left me feeling rejuvenated and free of stress."} <button onClick={toggleReadMore}>{isReadMore ? <span className="underline text-blue-600">Show less</span> : <span className="underline text-blue-600">Read More</span>}</button>
                              </p>
                            </div>
                          </div>
                          <div className="card card-side bg-base-100  mt-4 shadow-md">
                            <figure>
                              <img
                                src="/image/s2.JPG"
                                alt="Movie" />
                            </figure>
                            <div className="card-body">
                              <h2 className="flex items-center gap-2"><FaLocationDot /> 123 Elm Street,Newyork</h2>
                              <p>Healing body work <span className="text-blue-700"><i>by Cart</i></span></p>
                              <p className="text-sm">
                                Cart's healing bodywork massage was <br />
                                absolutely transformative. Their infuitive touch <br />
                                and deep understanding at {isReadMore && "muscle tension provided a deeply relaxing experience that left me feeling rejuvenated and free of stress."} <button onClick={toggleReadMore}>{isReadMore ? <span className="underline text-blue-600">Show less</span> : <span className="underline text-blue-600">Read More</span>}</button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <div >
                          <div className="card card-side bg-base-100 shadow-md">
                            <figure>
                              <img
                            
                                src="/image/s1.JPG"
                                alt="Movie" />
                            </figure>
                            <div className="card-body">
                              <h2 className="flex items-center gap-2"><FaLocationDot /> 123 Elm Street,Newyork</h2>
                              <p>Healing body work <span className="text-blue-700"><i>by Cart</i></span></p>
                              <p className="text-sm">
                                Cart's healing bodywork massage was <br />
                                absolutely transformative. Their infuitive touch <br />
                                and deep understanding at {isReadMore && "muscle tension provided a deeply relaxing experience that left me feeling rejuvenated and free of stress."} <button onClick={toggleReadMore}>{isReadMore ? <span className="underline text-blue-600">Show less</span> : <span className="underline text-blue-600">Read More</span>}</button>
                              </p>
                            </div>
                          </div>
                          <div className="card card-side bg-base-100  mt-4 shadow-md">
                            <figure>
                              <img
                                src="/image/s2.JPG"
                                alt="Movie" />
                            </figure>
                            <div className="card-body">
                              <h2 className="flex items-center gap-2"><FaLocationDot /> 123 Elm Street,Newyork</h2>
                              <p>Healing body work <span className="text-blue-700"><i>by Cart</i></span></p>
                              <p className="text-sm">
                                Cart's healing bodywork massage was <br />
                                absolutely transformative. Their infuitive touch <br />
                                and deep understanding at {isReadMore && "muscle tension provided a deeply relaxing experience that left me feeling rejuvenated and free of stress."} <button onClick={toggleReadMore}>{isReadMore ? <span className="underline text-blue-600">Show less</span> : <span className="underline text-blue-600">Read More</span>}</button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <div >
                          <div className="card card-side bg-base-100 shadow-md">
                            <figure>
                              <img
                            
                                src="/image/s1.JPG"
                                alt="Movie" />
                            </figure>
                            <div className="card-body">
                              <h2 className="flex items-center gap-2"><FaLocationDot /> 123 Elm Street,Newyork</h2>
                              <p>Healing body work <span className="text-blue-700"><i>by Cart</i></span></p>
                              <p className="text-sm">
                                Cart's healing bodywork massage was <br />
                                absolutely transformative. Their infuitive touch <br />
                                and deep understanding at {isReadMore && "muscle tension provided a deeply relaxing experience that left me feeling rejuvenated and free of stress."} <button onClick={toggleReadMore}>{isReadMore ? <span className="underline text-blue-600">Show less</span> : <span className="underline text-blue-600">Read More</span>}</button>
                              </p>
                            </div>
                          </div>
                          <div className="card card-side bg-base-100  mt-4 shadow-md">
                            <figure>
                              <img
                                src="/image/s2.JPG"
                                alt="Movie" />
                            </figure>
                            <div className="card-body">
                              <h2 className="flex items-center gap-2"><FaLocationDot /> 123 Elm Street,Newyork</h2>
                              <p>Healing body work <span className="text-blue-700"><i>by Cart</i></span></p>
                              <p className="text-sm">
                                Cart's healing bodywork massage was <br />
                                absolutely transformative. Their infuitive touch <br />
                                and deep understanding at {isReadMore && "muscle tension provided a deeply relaxing experience that left me feeling rejuvenated and free of stress."} <button onClick={toggleReadMore}>{isReadMore ? <span className="underline text-blue-600">Show less</span> : <span className="underline text-blue-600">Read More</span>}</button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                   
                   
                  </Swiper>
                </div>
                </div>
                <div className="w-[490px]">
                <div className="mt-4 ml-5">
                <h1 className="font-bold text-3xl">Popular Cities</h1>
              </div>
                <div className=" bg-white h-[500px] p-4 ml-4 rounded-md mt-4">
               <div className="grid grid-cols-3 col-span-3 gap-10">
                <a className="text-blue-600 underline" href="#">Atlana,GA</a>
                <a className="text-blue-600 underline"  href="#">Indianapolis,IN</a>
                <a className="text-blue-600 underline"  href="#">Philadephea,PA</a>
               <a className="text-blue-600 underline"  href="#">Boston,MA</a>
               <a className="text-blue-600 underline"  href="#">Jacksonvilla,FL</a>
               <a className="text-blue-600 underline"  href="#">Queens,NY</a>
               <a className="text-blue-600 underline"  href="#">Chicago,IL</a>
               <a className="text-blue-600 underline"  href="#">Kanas City,MO</a>
               <a className="text-blue-600 underline"  href="#">Raleigh,NC</a>
               <a className="text-blue-600 underline"  href="#">Chicago,IL</a>
               <a className="text-blue-600 underline"  href="#">Los Angelas,CA</a>
               <a className="text-blue-600 underline"  href="#">San Antanio,Tx</a>
               <a className="text-blue-600 underline"  href="#">El Paso,Tx</a>
               <a className="text-blue-600 underline"  href="#">Miamo,FL</a>
               <a className="text-blue-600 underline"  href="#">Tucson,AZ</a>
               <a className="text-blue-600 underline"  href="#">Fresno,CA</a>
               <a className="text-blue-600 underline"  href="#">Nashvilla,TN</a>
               <a className="text-blue-600 underline"  href="#">Upland,CA</a>
               <a className="text-blue-600 underline"  href="#">Huston,TX</a>
               <a className="text-blue-600 underline"  href="#">Okhlamo City,OK</a>
               <a className="text-blue-600 underline"  href="#">Washington,D.C</a>
               </div>
                 
                </div>
                </div>
                
              </div>
        </div>
    );
};

export default Home;