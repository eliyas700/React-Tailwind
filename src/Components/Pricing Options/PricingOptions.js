import React from "react";
import Price from "../Price/Price";

const PricingOptions = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benifits: [
        "Life time Access",
        "Unlimited Use",
        "Habi jabi",
        "Aar Ki Pabi",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benifits: [
        "Everything On Free",
        "Life time Access",
        "Unlimited Use",
        "Habi jabi",
        "Aar Ki Pabi",
      ],
    },

    {
      id: 3,
      name: "Premium",
      price: 19.99,
      benifits: [
        "Everything On Regular",
        "Unlimited Use",
        "Habi jabi",
        "Aar Ki Pabi",
      ],
    },
  ];
  return (
    <div className="bg-purple-400 py-8">
      <h1 className="text-4xl font-bold py-5 text-white">
        Best Deals Of the Town
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde a quam
        incidunt nisi provident laborum maiores. A facere beatae quia.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
        {pricingOptions.map((option) => (
          <Price key={option.id} option={option}></Price>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
