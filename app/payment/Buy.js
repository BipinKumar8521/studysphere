"use client"
import React, { useState } from "react";

const Buy = ({ makePayment }) => {

    const [isLoading, setIsLoading] = useState(false);



    return (
        <div>

            <h1>Razor Pay Integration with NextJs 13</h1>
            <button
                onClick={() => {
                    makePayment({ productId: "example_ebook" });
                }}
                disabled={isLoading}

            >
                {isLoading ? 'Processing...' : 'Buy Now'}
            </button>



        </div>
    );
};

export default Buy;