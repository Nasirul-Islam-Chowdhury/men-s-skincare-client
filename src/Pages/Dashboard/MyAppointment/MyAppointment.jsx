import React, { useContext } from 'react';
import { AuthContext } from '../../../Shared/Contexts/AuthContext';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [], isLoading } = useQuery({
      queryKey: ["bookings", user?.email],
      queryFn: () =>
        fetch(`https://men-s-skincare-server.vercel.app/bookings?email=${user?.email}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((data) => data.json()),
    });
    if(isLoading){
      return <Loading/>
    }
    return (
<div>
{
    bookings &&
    <div>
      <h3 className="text-3xl mb-5">My Appointements</h3>

      <div className="lg:overflow-x-auto overflow-x-scroll w-full whitespace-nowrap">
        <table className="table w-full bg-[#F4F3EE]">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Teatment</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((book, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>{book.name}</th>
                  <th>{book.careName}</th>
                  <th>{book.date}</th>
                  <th>
                    {book.price && !book.paid &&
                      <Link to={`/dashboard/payment/${book._id}`}>
                        <button className="btn btn-sm">Pay</button>
                      </Link>                      
                    }
                    {
                      book.price && book.paid && <span className="text-green-500">Paid</span>
                    }
                  </th>
                </tr>
              ))
             
              
              }
          </tbody>
        </table>
      </div>
    </div>
}
{
    bookings.length < 1 &&
    <div className='flex justify-center items-center container min-h-screen bg-[#F4F3EE'>
     <p className='lg:text-3xl md:text-2xl text-xl font-semibold text-center'>   You Haven't Booked Any Appointment Yet</p>
    </div>
}
</div>
    );
};

export default MyAppointment;