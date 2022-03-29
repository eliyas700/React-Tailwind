import React from "react";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/solid";
const Price = ({ option }) => {
  const { name, price, benifits } = option;
  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-xl rounded font-bold bg-purple-400 py-4">{name}</h2>
      <p className="text-xl font-bold text-center">
        <span className="text-5xl">{price}</span>
        <span>/Mo</span>
      </p>
      <div className="text-left">
        <h2 className="text-xl text-left">Benefits:</h2>
        {benifits.map((benifit) => (
          <p className="flex items-center mr-4">
            <CheckCircleIcon
              className="text-green-600 mr-3"
              height={20}
              width={20}
            ></CheckCircleIcon>
            {benifit}
          </p>
        ))}
      </div>
      <button className="flex mt-7 justify-center items-center text-white py-2 w-full bg-green-700 rounded">
        Buy Now<ArrowRightIcon className="w-7 h-7 ml-3"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default Price;
