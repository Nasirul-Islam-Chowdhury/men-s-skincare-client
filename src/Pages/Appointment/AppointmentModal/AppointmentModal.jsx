import React, { useContext } from "react";
import { AuthContext } from "../../../Shared/Contexts/AuthContext";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import Loading from "../../../Shared/Loading/Loading";

const AppointmentModal = ({setCare, care, selected, refetch}) => {
  const date = format(selected, "PP")
  const {user,loader} = useContext(AuthContext);
 
  if(loader){
    return <Loading/>
  }

  const handleAppointment = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    if(!user?.email){
      return toast.error("Please Login first to continue")
    }
    const bookingModal = {
      careName: care.name, 
      name, 
      date, 
      email, 
      phone,
      price: care.price
    }
    fetch(`https://men-s-skincare-server.vercel.app/bookings?email=${user?.email}`,{
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify(bookingModal)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.acknowledged){  
        setCare(null)
        toast.success("Booking added successfully")
        refetch()
      }else{
        toast.error(data.message)
      }
      console.log(data)})
      
  }


  return (
    <div >
      <div className="modal" id="my_modal_8">
        <div className="modal-box bg-white text-black">
          <div className="modal-action">
            <label
            onClick={()=>setCare(null)}
              htmlFor="my_modal_6"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
            >
              x
            </label>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center">{care?.name}</h1>
          </div>
          <form onSubmit={handleAppointment}  className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
            />

            <input
            name="name"
            disabled
        
            defaultValue={user?.displayName}
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
            name="email" 
         
            disabled
            defaultValue={user?.email}
              type="email"
              placeholder="email"
              className="input input-bordered w-full "
            />
            <input
            required
            name="phone"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input className="bg-neutral w-full text-white py-2 rounded cursor-pointer" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
