import React from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => console.log('test',data);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold">Welcome Back</h1>
        <p>Login with Profast</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            {...register("email")}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            {...register("password", {required:true, minLength:6})}
          />
          {
            errors.password?.type === 'required' && <p className="text-red-500"> Password is required</p>
          }
          {
            errors.password?.type === 'minLength' && <p className="text-red-500"> Password must be 6 characters</p>
          }

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn mt-4 bg-brand text-black">Login</button>

          <p className="text-base">Don't have an account? <a href="./register" className="font-bold text-brand">Register</a></p>

        </fieldset>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
