import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                        <div>
                            <h1 className="text-4xl text-blue-600 ml-4">LOGO</h1>
                            <h1 className="font-semibold ml-4 text-2xl mt-2">Log In To Your Account</h1>
                            <p className="ml-4 mt-2">Welcome Back! Select a methode to log in:</p>
                            <div className="flex gap-10 mt-2 ml-4">
                                <button className="btn bg-[#e6e6e6]"><FcGoogle /> Google</button>
                                <button className="btn bg-[#278cfe] text-white"><FaFacebookSquare />
                                    Facebook</button>
                            </div>
                            <p className="text-sm mt-4 ml-16">or continue with email</p>
                        </div>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="password" className="grow" placeholder="Enter your password" />
                                    <span> <FaEye /></span>
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