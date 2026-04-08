import React from "react";
import IMG from "../../assets/agent-pending.png";
import { useForm } from "react-hook-form";
const BeARider = () => {
  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white p-12">
      <section className="w-[50%]">
        <h1 className="font-extrabold text-5xl">Be a Rider</h1>
        <p className=" text-base text-gray-500 mt-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </section>

      <section className="flex gap-6 justify-center">
        <div className="w-[50%]">
          <h3 className="mt-16 text-3xl font-semibold">
            Tell us about yourself
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
             
             {/* Top Container */}
            <div className="flex gap-6">

              {/* Left Side */}
              <div className="w-[50%]">
                <label className="flex items-center gap-2 cursor-pointer font-medium">
                  {" "}
                  Your Name{" "}
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Rider's Name"
                  className="input input-bordered w-full"
                />

                <label className="flex items-center gap-2 cursor-pointer font-medium mt-6">
                  {" "}
                  Your Email{" "}
                </label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Rider's Email"
                  className="input input-bordered w-full"
                />

                <label className="flex items-center gap-2 cursor-pointer font-medium mt-6">
                  {" "}
                  NID No{" "}
                </label>
                <input
                  {...register("nid_no")}
                  type="text"
                  placeholder="NID no."
                  className="input input-bordered w-full"
                />
              </div>

              {/* Right Side */}
               <div className="w-[50%]">
                <label className="flex items-center gap-2 cursor-pointer font-medium">
                  {" "}
                  Age{" "}
                </label>
                <input
                  {...register("age")}
                  type="text"
                  placeholder="Rider's Name"
                  className="input input-bordered w-full"
                />

                <label className="flex items-center gap-2 cursor-pointer font-medium mt-6">
                  {" "}
                  Your Region{" "}
                </label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Rider's Email"
                  className="input input-bordered w-full"
                />

                <label className="flex items-center gap-2 cursor-pointer font-medium mt-6">
                  {" "}
                  NID No{" "}
                </label>
                <input
                  {...register("nid_no")}
                  type="text"
                  placeholder="NID no."
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Image Container  */}
        <div className=" bg-amber-100">
          <img src={IMG} alt="" />
        </div>
      </section>
    </div>
  );
};

export default BeARider;
