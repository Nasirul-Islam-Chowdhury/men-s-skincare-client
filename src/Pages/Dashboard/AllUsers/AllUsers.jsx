import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading'
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users=[], isLoading, refetch} = useQuery({
        queryKey: 'users',
        queryFn:()=> fetch('http://localhost:5000/users').then(res=>res.json())
    })
    if(isLoading){
        return <Loading/>
    }
    const handleMakeAdmin = (id)=>{
        fetch(`http://localhost:5000/user/admin/${id}`,{
            method: "PUT",
            headers: {
                autherization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount> 0){
                toast.success("make admin successfull")
                refetch()
            }
            console.log(data)})
    }
    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/user/${id}`,{
            method: "DeLETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount> 0){
                toast.success("User Deleted successfull")
                refetch()
            }
            console.log(data)})
    }

    return (
        <div className='p-5'>
        <h2 className='text-3xl'>All Users</h2>
        <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Admin</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       {
        users.map((user, i)=><tr key={i}>
            <td>{i+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            
            <td>{ user?.role !== "admin" &&  <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td><button onClick={()=>handleDelete(user._id)} className='btn btn-danger btn-xs'>Delete</button></td>
        </tr>)
       }
      </tbody>
    </table>
  </div>
    </div>
    );
};

export default AllUsers;