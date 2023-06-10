import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);
const Payment = () => {
  const booking = useLoaderData();
  return (
    <div className="p-2">
      <h1 className="text-3xl font-primary">Payment</h1>
      
      <h3 className="text-xl mt-4">
        Please Pay ${booking.price} for appointment on {booking.date} for {booking.careName}
      </h3>
      <div className="w-96 my-12">
      <Elements stripe={stripePromise}>
       <CheckOutForm booking={booking}/>
      </Elements>
      </div>
    </div>
  );
};

export default Payment;
