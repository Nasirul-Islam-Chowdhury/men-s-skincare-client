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
        fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
        //   headers: {
            // autherization: `bearer ${localStorage.getItem("accessToken")}`,
        //   },
        }).then((data) => data.json()),
    });
    if(isLoading){
      return <Loading/>
    }
    return (
<div>
{
    bookings.length>0 &&
    <div className="p-5">
      <h3 className="text-3xl mb-5">My Appointement</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
            {bookings?.length>0 &&
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
    bookings.length == 0 &&
    <div className='flex justify-center items-center container min-h-[800px]'>
     <p className='lg:text-4xl md:text-3xl text-2xl font-bold text-center min-h-100vh'>   You Haven't Booked Any Appointment Yet</p>
    </div>
}
</div>
    );
};

export default MyAppointment;