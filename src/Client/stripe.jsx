import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../App.css";
import Image from "../assets/NitroTech.jpg";
import { PUBLIC_KEY, PRICE_ID } from "../constants";
const stripePromise = loadStripe(PUBLIC_KEY);

function StripeClient() {
  async function handleCheckOut() {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://example.com/success",
      cancelUrl: "https://example.com/cancel",
    });
    console.warn(error.message);
  }

  return (
    <>
      <div>
        <img src={Image} alt="NitroTech" className="logo" />
        <span>MuscleTech NitroTech 100% Whey Gold Performance Series</span>
        <button onClick={handleCheckOut}>Buy Now!</button>
      </div>
    </>
  );
}

export default StripeClient;
