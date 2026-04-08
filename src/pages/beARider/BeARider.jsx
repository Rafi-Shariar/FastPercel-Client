import React from "react";
import IMG from "../../assets/agent-pending.png";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
const BeARider = () => {
  const axiosSecure = useAxiosSecure();
  const user = useAuth();
  console.log(user);
  

  //React Hook Form
  const { register, handleSubmit, control } = useForm();

  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];

  const riderRegion = useWatch({ control, name: "region" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const onSubmit = (data) => {
    const ridersInfo = { ...data, status: "Pending" };

    axiosSecure.post("/riders", ridersInfo).then((res) => {
      if (res.data.insertedId) {
        toast.success("Request Send Successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#003d32",
            color: "#fff",
          },
        });
      }
      else{
        toast.error("Error Occured! Try again.")
      }
    });
  };
  return (
    <div className="bg-white p-12">
      <Toaster />
      <section className="w-[50%]">
        <h1 className="font-extrabold text-5xl">Be a Rider</h1>
        <p className=" text-base text-gray-500 mt-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </section>

      <section className="flex gap-6 justify-between">
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
                <label className="flex items-center gap-2 cursor-pointer font-medium text-sm">
                  {" "}
                  Your Name{" "}
                </label>
                <input
                  {...register("name")}
                  type="text"
                  defaultValue={user?.user.displayName}
                  readOnly
                  className="input input-bordered w-full"
                />

                <label className="flex items-center gap-2 cursor-pointer font-medium text-sm mt-6">
                  {" "}
                  Your Email{" "}
                </label>
                <input
                  {...register("email")}
                  type="text"
                  defaultValue={user?.user.email}
                  readOnly
                  className="input input-bordered w-full"
                />

                <label className="flex items-center gap-2 cursor-pointer font-medium text-sm mt-6">
                  {" "}
                  NID No{" "}
                </label>
                <input
                  {...register("nid_no")}
                  type="number"
                  placeholder="NID no."
                  className="input input-bordered w-full"
                />
              </div>

              {/* Right Side */}
              <div className="w-[50%]">
                <label className="flex items-center gap-2 cursor-pointer font-medium text-sm">
                  {" "}
                  Age{" "}
                </label>
                <input
                  {...register("age")}
                  type="text"
                  placeholder="Rider's Name"
                  className="input input-bordered w-full"
                />

                <label className="flex items-center gap-2 cursor-pointer font-medium text-sm mt-6">
                  {" "}
                  Your Region{" "}
                </label>
                <select
                  {...register("region")}
                  placeholder="select region"
                  className="select select-bordered w-full font-normal"
                >
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {" "}
                      {r}
                    </option>
                  ))}
                </select>

                <label className="flex items-center gap-2 cursor-pointer font-medium text-sm mt-6">
                  {" "}
                  Contact No{" "}
                </label>
                <input
                  {...register("contact")}
                  type="contact"
                  placeholder="Contact no."
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Bottom Container */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer font-medium text-sm mt-6">
                {" "}
                Prefered Warehouse ?{" "}
              </label>
              <select
                {...register("warehouse")}
                className="select select-bordered w-full font-normal"
              >
                {districtsByRegion(riderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {" "}
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn bg-brand text-black px-12 w-full mt-3"
            >
              Confirm Parcel
            </button>
          </form>
        </div>

        {/* Image Container  */}
        <div className="">
          <img src={IMG} alt="" />
        </div>
      </section>
    </div>
  );
};

export default BeARider;
