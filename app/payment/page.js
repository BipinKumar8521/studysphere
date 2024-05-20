"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter  } from 'next/navigation';
import Loading from "@/app/loading";
const BuyProduct = () => {
  const router = useRouter()
  const makePayment = async ({ productId = null }) => {
    // "use server"
    const key = process.env.RAZORPAY_API_KEY;
    console.log(key);
    // Make API call to the serverless API
    const data = await fetch("http://localhost:3000/api/razorpay");
    const { order } = await data.json();
    console.log(order.id);
    const options = {
      key: key,
      name: "StudySphere",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "Online learning platform",
      handler: async function (response) {
        console.log(response);
        const data = await  fetch("http://localhost:3000/api/paymentverify", {
          method: "POST",
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        const res = await data.json();

        console.log("response verify==",res)

        if(res?.message=="success")
        {
          console.log("redirected.......")
          router.push("/paymentsuccess?paymentid="+response.razorpay_payment_id)

        }
      },
      prefill: {
        name: "studysphere",
        email: "studysphere@gmail.com",
        contact: "000000000",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Buy makePayment={makePayment} />
      </Suspense>
    </>
  );
};
export default BuyProduct;