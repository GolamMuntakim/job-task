import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useState } from "react";
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import UseAuth from "./UseAuth";

const SignUp = () => {
    const { createUser, updateUserProfile, logOut, loading } = UseAuth()
    // console.log(user)
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate();
    const from = '/login'
    

    const onSubmit = data => {
        const { email, password,
          
            fullname } = data;
      
      
        createUser(email, password).then(() => {
            updateUserProfile(fullname, email)
                .then(() => {
                    navigate(from)
                })
            logOut()
        })
        toast.success(' registered succesfully')
    }
    if (loading) {
        return <div className="flex justify-center items-center mt-62"><span className="loading loading-bars loading-lg"></span></div>
    }
    return (
        <div>
            <div className="hero bg-base-100 min-h-screen lg:flex hidden">
                <div className="hero-content flex-col lg:flex-row-reverse w-[1200px]">
                    <div className="w-[500px]">
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[550px] bg-[url('../../public/image/bg.JPG')] rounded-md" >
                            <SwiperSlide>
                                <div className="flex justify-center items-center mt-56">
                                    <p className="text-center h-[100px] bg-[#414b35] text-white w-[200px] p-4 rounded-md font-bold">
                                        <span className="text-blue-600"> Create an account </span><br />
                                        Fill in your information
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
                            <h1 className="font-semibold ml-4 text-2xl mt-2">Sign in to your account</h1>
                            <p className="ml-4 mt-2 text-sm">Welcome Back! By click the sign up buttonc, you are agree <br /> To Zenitod Terms and service and knowledge the <br /> <a className="text-blue-600 underline" href="#">privacy and policy</a> </p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered"
                                    {...register("fullname", { required: true })}
                                />
                                {errors.fullname && <small className="text-red-500">This field is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <small className="text-red-500">This field is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type={showPassword ? "text" : "password"} className="grow" placeholder="Enter your password"
                                        {...register("password")}
                                    />
                                    <span className="" onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {
                                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                        }
                                    </span>
                                    {errors.password && errors.password.type === "required" && <small className="text-red-500">This field is required</small>}



                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type={showPassword ? "text" : "password"} className="grow" placeholder="Enter your password" 
                                    {...register("password")}
                                    />
                                    <span className="" onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {
                                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                        }
                                    </span>
                                    {errors.password && errors.password.type === "required" && <small className="text-red-500">This field is required</small>}
                                </label>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <label className="flex gap-2 mt-2 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="checkbox" />
                                        <span className="label-text text-blue-600">Accepte Term of service</span>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <Toaster></Toaster>
                        </form>
                        <p className="text-center text-sm">Already Have an account? <Link to="/login"><span className="underline text-blue-600">Log in</span>
                        </Link></p>
                    </div>
                </div>
            </div>
            <div className="hero  min-h-screen flex lg:hidden  bg-[url('/image/log.JPG')]">
            <div className="mb-[600px] text-center w-full">
               <p className="text-5xl  text-[#3a7ce4] ml-36">Logo</p>
               <p className="-mr-32 text-center mt-4 text-white">Sign in to view all the<br />
               message therapist</p>
            </div>
                <div className="hero-content flex-col lg:flex-row-reverse w-[1200px]">
                    <div className="card bg-base-100   w-[500px] p-10 mt-72 mr-[250px]  fixed">
                        <div>
                            <h1 className="font-semibold ml-4 text-2xl mt-2 text-center">Sign in </h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered"
                                    {...register("fullname", { required: true })}
                                />
                                {errors.fullname && <small className="text-red-500">This field is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <small className="text-red-500">This field is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type={showPassword ? "text" : "password"} className="grow" placeholder="Enter your password"
                                        {...register("password")}
                                    />
                                    <span className="" onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {
                                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                        }
                                    </span>
                                    {errors.password && errors.password.type === "required" && <small className="text-red-500">This field is required</small>}



                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type={showPassword ? "text" : "password"} className="grow" placeholder="Enter your password" 
                                    {...register("password")}
                                    />
                                    <span className="" onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {
                                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                        }
                                    </span>
                                    {errors.password && errors.password.type === "required" && <small className="text-red-500">This field is required</small>}
                                </label>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <label className="flex gap-2 mt-2 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="checkbox" />
                                        <span className="label-text text-blue-600">Accepte Term of service</span>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <Toaster></Toaster>
                        </form>
                        <p className="text-center text-sm">Already Have an account? <Link to="/login"><span className="underline text-blue-600">Log in</span>
                        </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;