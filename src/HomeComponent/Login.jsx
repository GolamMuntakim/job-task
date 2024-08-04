import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import toast from "react-hot-toast";
import UseAuth from "./UseAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Login = () => {
    const {logInUser,googleLogin,loading} =  UseAuth();
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const navigate= useNavigate();
      const from='/'
      const onSubmit = (data)=>{
        const{email, password} = data;
        logInUser(email, password)
        .then(result=>{
            console.log(result)
            
            if(result.user){
                navigate(from)
            }
        })
        .catch((error)=>{
            if(error.code === "auth/invalid-credential"){
                toast.error('password is incorrect')
            }else{
                toast.error('login failed')
            }
        })
      }
      if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
      }
      const handleSocial=(social)=>{
        social()
        .then(result=>{
            if(result.user){
                navigate(from)
            }
        })
      }
    return (
        <div>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-[1200px]">
                    <div className="w-[500px]">
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[550px] bg-[url('../../public/image/bg.JPG')] rounded-md" >
                            <SwiperSlide>
                               <div className="flex justify-center items-center mt-56">
                                 <p className="text-center h-[100px] bg-[#414b35] text-white w-[200px] p-4 rounded-md font-bold">
                                   <span className="text-blue-600"> sign in </span>to view all the <br />
                                    message therapist
                                 </p>
                               </div>
                          </SwiperSlide>
                            <SwiperSlide>
                            <div className="flex justify-center items-center mt-56">
                                 <p className="text-center h-[100px] bg-[#414b35] text-white w-[200px] p-4 rounded-md font-bold">
                                   we provide our <br />
                                   best to make good health
                                 </p>
                               </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="flex justify-center items-center mt-56">
                                 <p className="text-center h-[100px] bg-[#414b35] text-white w-[200px] p-4 rounded-md font-bold">
                                   Top Doctor's <br />
                                   form the country
                                 </p>
                               </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="card bg-base-100  max-w-sm shrink-0 w-[500px]">
                        <div>
                            <h1 className="text-4xl text-blue-600 ml-4">LOGO</h1>
                            <h1 className="font-semibold ml-4 text-2xl mt-2">Log In To Your Account</h1>
                            <p className="ml-4 mt-2">Welcome Back! Select a methode to log in:</p>
                            <div className="flex gap-10 mt-2 ml-4">
                                <button onClick={()=>handleSocial(googleLogin)} className="btn bg-[#e6e6e6]"><FcGoogle /> Google</button>
                                <button className="btn bg-[#278cfe] text-white"><FaFacebookSquare />
                                    Facebook</button>
                            </div>
                            <p className="text-sm mt-4 ml-16">or continue with email</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered" 
                                 {...register("email",{required:true})} 
                                />
                                {errors.email && <small className="text-red-500">This field is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type={showPassword? "text" : "password"} className="grow" placeholder="Enter your password"
                                     {...register("password", {required:true})}
                                     />
                                   <span className="" onClick={()=>setShowPassword(!showPassword)}>
            {
              showPassword ? <FaRegEyeSlash/> : <FaRegEye/>
            }
          </span>
          {errors.password && <small className="text-red-500">This field is required</small>}
                                </label>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <label className="flex gap-2 mt-2 cursor-pointer">
                                            <input type="checkbox" defaultChecked className="checkbox" />
                                            <span className="label-text">Remember me</span>
                                        </label>
                                    </div>
                                    <div>
                                        <a href="#" className="text-sm underline text-blue-600">Forget Password</a>
                                    </div>
                                </div>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                        <p className="text-center text-sm">Don't Have Any Account? <Link to="/signup"><span className="underline text-blue-600">Create Account</span>
                        </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;