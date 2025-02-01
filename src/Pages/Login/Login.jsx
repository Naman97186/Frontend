import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";

import { useForm } from "react-hook-form";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission on the frontend
  };

  return (
    <>   
      <div className="hero min-h-screen bg-base-200 px-4 sm:px-6 lg:px-8">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Lottie  loop={true} className="max-w-xs sm:max-w-md lg:max-w-lg" />
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center mb-4">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Enter your email" {...register("email", { required: true })} className="input input-bordered w-full" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} placeholder="Enter your password" {...register("password", { required: true })} className="input input-bordered w-full" />
                  <button onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword); }} className="btn bg-black text-white absolute top-0 right-0 rounded-l-none hover:bg-gray-700">
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-4">
                <input type="submit" className="btn bg-black text-white hover:bg-gray-700 w-full" value="Login" />
              </div>
            </form>
            <p className="text-sm font-light text-gray-500 text-center mt-4">
              Don’t have an account yet? <Link to="/signup" className="font-medium text-[#AC9C63] hover:text-red-500">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
