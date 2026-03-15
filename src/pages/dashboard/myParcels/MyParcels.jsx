import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyParcels = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    //tanstack query
    const {data : parcels=[],refetch} = useQuery({
        queryKey: ['my-parcels', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;

        }
    })

   const handleParcelDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });

    }
    



    return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#003d32]">My Parcels</h2>
        <div className="badge badge-success text-white p-3">{parcels.length} Total</div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-gray-50 text-[#003d32]">
            <tr>
              <th>#</th>
              <th>Parcel Name</th>
              <th>Sender (From)</th>
              <th>Receiver (To)</th>
              <th>Weight</th>
              <th>Payment Status</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="font-bold">{parcel.parcelName}</div>
                  <div className="text-xs opacity-50">{parcel.parcelType}</div>
                </td>
                <td>
                  <span className="font-medium">{parcel.senderName}</span>
                  <br />
                  <span className="text-xs badge badge-ghost">{parcel.senderWarehouse}</span>
                </td>
                <td>
                  <span className="font-medium">{parcel.receiverName}</span>
                  <br />
                  <span className="text-xs badge badge-ghost">{parcel.receiverWarehouse}</span>
                </td>
                <td className="font-semibold">{parcel.parcelWeight} KG</td>
                <td className="font-semibold">{parcel.payment_status}</td>
                <td>
                  {new Date(parcel.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="text-center">
                  <button className="btn btn-sm btn-outline btn-error mr-6" onClick={() => handleParcelDelete(parcel._id)}>Delete</button>
                <button className="btn btn-sm btn-outline btn-success" >Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {parcels.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No parcels found in your history.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyParcels;