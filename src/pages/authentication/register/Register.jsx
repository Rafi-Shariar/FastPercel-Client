import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../socialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold">Create An Account</h1>
        <p>Register with Profast</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Name"
            {...register("name", { required: true })}
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            {...register("email", { required: true })}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500"> Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500"> Password must be 6 characters</p>
          )}

          <button className="btn mt-4 bg-brand text-black">Register</button>

          <p className="text-base">
            Don't have an account?{" "}
            <span className="font-bold text-brand">
              <a href="./login" className="underline">Login</a>
            </span>
          </p>
          
        </fieldset>
      </form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
