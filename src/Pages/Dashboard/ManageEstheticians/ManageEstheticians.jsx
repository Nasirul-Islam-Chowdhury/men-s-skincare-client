import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';

const ManageEstheticians = () => {

  const { data: estheticians = [], isLoading, refetch } = useQuery({
    queryKey: "estheticians",
    queryFn: () =>
      fetch(`https://men-s-skincare-server.vercel.app/estheticians`, {
       headers:{
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
       }
      })
        .then((data) => data.json())
        .catch((error) => console.log(error)),
  });
  const handleDeleteDoctor=(esthetician)=>{
    fetch(`https://men-s-skincare-server.vercel.app/estheticians/${esthetician._id}`,{
        method: "DELETE",
      
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            toast.success(`esthetician ${esthetician.name} deleted successfully`)
            refetch()
        }
        console.log(data)})
  }
  if (isLoading) {
    return <Loading />;
  }

    return (
        <div className="p-5">
      <h1 className="text-2xl font-bold">Manage Estheticians: {estheticians?.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {estheticians.map((esthetician, i) => (
              <tr key={esthetician._id} >
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="h-5 w-5" src={esthetician.photo} />
                    </div>
                  </div>
                </td>
                <td>{esthetician.name}</td>
                <td>{esthetician.subject}</td>
                <td>
                  <label
                    onClick={() => handleDeleteDoctor(esthetician)}
                    htmlFor="my_modal_6"
                    className="btn btn-sm btn-eror"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
    );
};

export default ManageEstheticians;