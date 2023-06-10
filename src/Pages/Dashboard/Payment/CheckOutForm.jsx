import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { da, tr } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({booking}) => {
    const [cardError, setCardError] = useState("")
    const [cardsuccess, setCardsuccess] = useState("")
    const [processing, setprocessing] = useState(false)
    const [transsactionId, setTranssactionId] = useState("")
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
  const elements = useElements();
    const {price,name, email, _id} = booking;
  useEffect(() => {
    fetch("https://men-s-skincare-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" ,
        authorization: `bearer ${localStorage.getItem("accessToken")}`
    },
      body: JSON.stringify({  booking}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);



  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }


    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
     
      setCardError("")
    }
setCardsuccess("")
setprocessing(true)
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email: email
            },
          },
        },
      );
      if(confirmError){
        setCardError(confirmError.message)
        return;
    }
    console.log(paymentIntent)
    if(paymentIntent.status === "succeeded"){
       
const payment = {
    price,
    transactionId: paymentIntent.id,
    email, 
    bookingId: _id
}
        fetch("https://men-s-skincare-server.vercel.app/payments",{
            method: "POST",
            headers:{
                "content-type":"application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(payment)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                setCardsuccess(paymentIntent.status)
                setTranssactionId(paymentIntent.id)
            }
            console.log(data)})
   
    }
    setprocessing(false)
  };
    return (
   <>
        <form  onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-accent px-6 mt-10' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <div>
        <h3 className="text-red-400">{cardError}</h3>
       {cardsuccess &&
         <h3 className="text-green-400">Congrats! your payment succeeded</h3>
       }
      {
        transsactionId &&
          <h3 className='text-sm'> your transaction id is <span className='font-bold'>{transsactionId}</span></h3>
      }
      </div>
   </>
    );
};

export default CheckOutForm;