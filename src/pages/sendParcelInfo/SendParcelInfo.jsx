import React from "react";
import { useForm, useWatch } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendParcelInfo = () => {
  const user = useAuth();
  const userEmail = user?.user.email;
  const axiosSecure = useAxiosSecure();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  //Divisons
  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const recieverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);

    return districts;
  };

  // Mock Submit Function
  const onSubmit = (data) => {
    const parcelData = { ...data, senderEmail: userEmail };
    axiosSecure.post("/addpercel", parcelData).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Parcel details added successfully!", {
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
    <div className="bg-white p-8 max-w-6xl mx-auto text-[#003d32]">
      {/* Toast Container */}
      <Toaster />

      <h1 className="text-2xl font-bold mb-6">Add Parcel</h1>
      <div className="divider"></div>
      <h3 className="text-lg font-semibold mb-6">Enter your parcel details</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Radio Selection */}
        <div className="flex gap-8 items-center mb-6">
          <label className="flex items-center gap-2 cursor-pointer font-medium">
            <input
              {...register("parcelType")}
              type="radio"
              value="Document"
              className="radio radio-success radio-sm"
              defaultChecked
            />
            <span>Document</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer font-medium">
            <input
              {...register("parcelType")}
              type="radio"
              value="Non-Document"
              className="radio radio-success radio-sm"
            />
            <span>Non-Document</span>
          </label>
        </div>

        {/* Top Row: Parcel Name & Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-semibold pb-1 text-xs uppercase opacity-70">
              Parcel Name
            </label>
            <input
              {...register("parcelName", {
                required: "Parcel name is required",
              })}
              type="text"
              placeholder="Parcel Name"
              className={`input input-bordered w-full ${errors.parcelName ? "border-red-500" : ""}`}
            />
            {errors.parcelName && (
              <span className="text-red-500 text-xs mt-1">
                {errors.parcelName.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label font-semibold pb-1 text-xs uppercase opacity-70">
              Parcel Weight (KG)
            </label>
            <input
              {...register("parcelWeight", { required: true })}
              type="number"
              step="0.1"
              placeholder="Parcel Weight"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="divider"></div>

        {/* Sender and Receiver Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Sender Details */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">
              Sender Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label text-xs font-semibold uppercase">
                  Sender Name
                </label>
                <input
                  {...register("senderName")}
                  type="text"
                  placeholder="Sender Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label text-xs font-semibold uppercase">
                  Region
                </label>
                <select
                  {...register("senderRegion")}
                  defaultValue="Select Region"
                  className="select select-bordered w-full font-normal"
                >
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label text-xs font-semibold uppercase">
                  Address
                </label>
                <input
                  {...register("senderAddress")}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label text-xs font-semibold uppercase">
                  Sender Contact No
                </label>
                <input
                  {...register("senderPhone")}
                  type="text"
                  placeholder="Sender Contact"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label text-xs font-semibold uppercase">
                Pickup Warehouse
              </label>
              <select
                {...register("senderWarehouse")}
                className="select select-bordered w-full font-normal"
              >
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control flex flex-col">
              <label className="label text-xs font-semibold uppercase">
                Pickup Instruction
              </label>
              <textarea
                {...register("pickupNote")}
                className="w-full textarea textarea-bordered h-24"
                placeholder="Instruction..."
              ></textarea>
            </div>
          </div>

          {/* Right Side: Receiver Details */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">
              Receiver's Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label text-xs font-semibold uppercase">
                  Receiver Name
                </label>
                <input
                  {...register("receiverName")}
                  type="text"
                  placeholder="Receiver Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label text-xs font-semibold uppercase">
                  Delivery Region
                </label>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a region"
                  className="select select-bordered w-full font-normal"
                >
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label text-xs font-semibold uppercase">
                  Receiver Address
                </label>
                <input
                  {...register("receiverAddress")}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label text-xs font-semibold uppercase">
                  Receiver Contact No
                </label>
                <input
                  {...register("receiverPhone")}
                  type="text"
                  placeholder="Contact No"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label text-xs font-semibold uppercase">
                Receiver Warehouse
              </label>
              <select
                {...register("receiverWarehouse")}
                defaultValue="pick a ware house"
                className="select select-bordered w-full font-normal"
              >
                {districtsByRegion(recieverRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control flex flex-col">
              <label className="label text-xs font-semibold uppercase">
                Delivery Instruction
              </label>
              <textarea
                {...register("deliveryNote")}
                className="w-full textarea textarea-bordered h-24"
                placeholder="Instruction..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button type="submit" className="btn btn-success text-white px-12">
            Confirm Parcel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcelInfo;
