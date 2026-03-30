import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../socialLogin/SocialLogin";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

const Register = () => {
  const [profilePic, setProfilePic] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser,updateUserProfile } = useAuth();
  const axiosInstance = useAxios();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(async (result) => {
        console.log(result);

        //user details in firebase
        const userInfo = {
          email: data.email,
          role: 'user',
          created_at: new Date().toISOString()
        }

        const userRes = await axiosInstance.post('/users', userInfo);
        console.log(userRes);
        
       

        //update profilePic & name in firebase
        const userProfile = {
          displayName : data.name,
          photoURL : profilePic
        }
        updateUserProfile(userProfile)
        .then(()=>{
          console.log('profile name & pic updated');
          
        })
        .catch(error => {
          console.error(error);
          
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageUpload =async (e) =>{
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append('image',image)

    const imageUploadURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;
    const res = await axios.post(imageUploadURL,formData)
    const imageURL = res.data.data.url;
    setProfilePic(imageURL);

  }

  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold">Create An Account</h1>
        <p>Register with Profast</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <fieldset className="fieldset">
          <label className="label">Photo</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="file-input"
            placeholder="Your Profile Picture"
          />


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
