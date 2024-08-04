import { IoLocationSharp } from "react-icons/io5";
import { FaCar} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '.././App.css';
import {  useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const initialSpots = useLoaderData()
 
  console.log(initialSpots)
    const [isReadMore, setIsReadMore] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const citiesList = [
        "Atlana,GA",
        "Indianapolis,IN",
        "Philadephea,PA",
        "Boston,MA",
        "Jacksonvilla,FL",
        "Queens,NY",
        "Chicago,IL",
        "Los Angelas,CA",
        "San Antanio,Tx",
        "El Paso,Tx",
        "Miamo,FL",
        "Tucson,AZ",
        "Fresno,CA",
        "Nashvilla,TN",
        "Upland,CA",
        "Huston,TX",
        "Okhlamo City,OK",
        "Washington,D.C",
    ];
const handleSearchChange = (e) => {
  setSearchInput(e.target.value);
};

const filteredCities = citiesList.filter(city => city.toLowerCase().includes(searchInput.toLowerCase()));

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

  
    return (
        <div>
           <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
             {/* featured therapist section */}
             <div className="flex flex-col lg:flex-row justify-between bg-white mt-6 w-full lg:w-[960px] mx-auto p-4 rounded-md ">
                <div>
                  <h1 className="font-semibold text-md lg:text-xl">I'am Looking For Massege Therapist Near</h1>
                  <p className="mt-2">I'am using this site, I agree to be bound by the <a className="underline text-blue-700" href="#">Terms of service</a><br />
                    and <a className="underline text-blue-700" href="#">Privacy policy</a>
                  </p>
                  <div className="hidden lg:flex">
                    <label className="input w-full lg:w-[500px] input-bordered flex items-center gap-2 mt-4
                   bg-[#eef3f4]">
                      <input type="text" className="grow bg-[#eef3f4] " placeholder="ZIP Code or City Name" value={searchInput} onChange={handleSearchChange}/>
                      <p className="bg-[#146bcb] text-white p-3 rounded-xl">Go</p>
                    </label>
                  </div>
                </div>
                <div>
                  <img src="image/home.JPG" alt="" />
                </div>
                <div className="lg:hidden flex">
                    <label className="input w-[500px] input-bordered flex items-center gap-2 mt-4
                   bg-[#eef3f4]">
                      <input type="text" className="grow bg-[#eef3f4] " placeholder="ZIP Code or City Name" value={searchInput} onChange={handleSearchChange}/>
                      <p className="bg-[#146bcb] text-white p-2 rounded-xl">Go</p>
                    </label>
                  </div>
              </div>
              {/* slider */}
              <div>
                <h1 className="mt-2 lg:ml-4 text-lg lg:text-3xl font-bold">Featured Therapist</h1>
                <div className="hidden lg:flex w-full lg:w-[950px] z-0 bg-white mx-auto lg:p-10 mt-4">
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
                    className="mySwiper w-full lg:w-[900px] h-[450px] mt-4 bg-white"
                  >
                    <SwiperSlide>
                      <div className="w-full lg:w-56">
                        <figure>
                          <img
                            className="w-full h-[200px] rounded-md"
                            src={initialSpots[0]?.image}
                            
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{initialSpots[0]?.name}</h2>
                          <p className="flex items-center gap-4"><IoLocationSharp />{initialSpots[0]?.location}</p>
                          <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                          <div className="card-actions w-full">
                           <Link 
                           state={{ name: initialSpots[0]?.name, image: initialSpots[0]?.image, location: initialSpots[0]?.location }} 
                           to={initialSpots[0]?._id}> <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full lg:w-56">
                        <figure>
                          <img
                            className="w-full h-[200px] rounded-md"
                            src={initialSpots[1]?.image}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{initialSpots[1]?.name}</h2>
                          <p className="flex items-center gap-4"><IoLocationSharp />{initialSpots[0]?.location}</p>
                          <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                          <div className="card-actions w-full">
                          <Link to={initialSpots[1]?._id}> <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" w-full lg:w-56 ">
                        <figure>
                          <img
                            className="w-full h-[200px] rounded-md object-cover"
                            src={initialSpots[2]?.image}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{initialSpots[2]?.name}</h2>
                          <p className="flex items-center gap-4"><IoLocationSharp />{initialSpots[2]?.location}</p>
                          <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                          <div className="card-actions w-full">
                          <Link to={initialSpots[2]?._id}> <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" w-full lg:w-56 ">
                        <figure>
                          <img
                            className="w-full h-[200px] rounded-md"
                            src={initialSpots[3]?.image}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{initialSpots[3]?.name}</h2>
                          <p className="flex items-center gap-4"><IoLocationSharp />{initialSpots[3]?.location}</p>
                          <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                          <div className="card-actions w-full">
                          <Link to={initialSpots[3]?._id}> <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="lg:hidden flex  w-full lg:w-[950px] z-0 bg-white mx-auto mt-4">
                  <Swiper
                    slidesPerView={1}
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
                    modules={[Navigation]}
                    className="mySwiper w-full lg:w-[900px] h-[450px]  mt-4 bg-white"
                  >
                    <SwiperSlide>
                      <div className="w-full lg:w-56">
                        <figure>
                          <img
                            className="w-full h-[200px] rounded-md"
                            src={initialSpots[0]?.image}
                            
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{initialSpots[0]?.name}</h2>
                          <p className="flex items-center gap-4"><IoLocationSharp />{initialSpots[0]?.location}</p>
                          <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                          <div className="card-actions w-full">
                           <Link 
                           state={{ name: initialSpots[0]?.name, image: initialSpots[0]?.image, location: initialSpots[0]?.location }} 
                           to={initialSpots[0]?._id}> <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full lg:w-56">
                        <figure>
                          <img
                            className="w-full h-[200px] rounded-md"
                            src={initialSpots[1]?.image}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{initialSpots[1]?.name}</h2>
                          <p className="flex items-center gap-4"><IoLocationSharp />{initialSpots[0]?.location}</p>
                          <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                          <div className="card-actions w-full">
                          <Link to={initialSpots[1]?._id}> <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" w-full lg:w-56 ">
                        <figure>
                          <img
                            className="w-full h-[200px] rounded-md object-cover"
                            src={initialSpots[2]?.image}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{initialSpots[2]?.name}</h2>
                          <p className="flex items-center gap-4"><IoLocationSharp />{initialSpots[2]?.location}</p>
                          <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                          <div className="card-actions w-full">
                          <Link to={initialSpots[2]?._id}> <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" w-full lg:w-56 ">
                        <figure>
                          <img
                            className="w-full h-[200px] rounded-md"
                            src={initialSpots[3]?.image}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{initialSpots[3]?.name}</h2>
                          <p className="flex items-center gap-4"><IoLocationSharp />{initialSpots[3]?.location}</p>
                          <p className="flex items-center gap-4"><FaCar />Mobile & In-Studio</p>
                          <div className="card-actions w-full">
                          <Link to={initialSpots[3]?._id}> <button className="btn bg-[#d4e9ff] w-full underline hover:bg-[#146bcb] hover:text-white">See Details</button></Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/* testimonial section */}
            
              <div className="flex lg:flex-row flex-col w-full lg:w-[1000px] mt-20 ">
             
                <div className="w-full lg:w-[490px]">
                <div className="mt-4 lg:ml-5">
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
                <div className="w-full lg:w-[490px]">
                <div className="mt-20 lg:mt-6 lg:ml-5">
                <h1 className="font-bold text-lg lg:text-3xl">Popular Cities</h1>
              </div>
                <div className=" bg-white h-[500px] lg:p-4 lg:ml-4 rounded-md mt-4">
               <div className="grid grid-cols-3 col-span-3 gap-5 lg:gap-10">
               <ul className="mt-4 grid grid-cols-3 col-span-3 gap-2 lg:gap-10">
                    {filteredCities.map((city, index) => (
                        <a href="#" key={index} className=" rounded-md underline text-blue-600">
                            {city}
                        </a>
                    ))}
                </ul>
               </div>
                 
                </div>
                </div>
                
              </div>
        </div>
    );
};

export default Home;