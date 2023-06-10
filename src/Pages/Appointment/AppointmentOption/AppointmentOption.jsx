import React, { useState } from "react";
import { format } from "date-fns";
import { useQuery, QueryClient } from "react-query";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
const AppointmentOption = ({ selected }) => {
  const [care, setCare] = useState(null);
  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch(`https://men-s-skincare-server.vercel.app/services`,{
        headers:{
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        }
      })
      .then((res) => res.json())
  });
  if (isLoading) {
    return (
      <div className="w-56 container mx-auto">
        <progress className="progress w-full"></progress>
      </div>
    );
  }
  const date = format(selected, "PP");

  return (
    <div className="container my-10">
      <h1 className="text-center mb-20 text-3xl font-semibold">
        Available services on {date}
      </h1>
  <div className="">
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {services.map((service) => (
          <AppointmentCard
            key={service._id}
            setCare={setCare}
            service={service}
          />
        ))}
      </div>
  </div>
      {
        care &&
        <AppointmentModal
        selected={selected}
          setCare={setCare}
          care={care}
          refetch={refetch}
        />
      }
    </div>
  );
};

export default AppointmentOption;
