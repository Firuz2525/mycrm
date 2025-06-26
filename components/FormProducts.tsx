"use client";

import React, { useState } from "react";

type Product = {
  name: string;
  price: number;
};

type Device = {
  product1: Product;
  product2: Product;
};

type Props = {
  setSelectedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const FormProducts = ({ setSelectedProducts }: Props) => {
  const [devices] = useState<Device[]>([
    {
      product1: { name: "15: 1.5mln", price: 1500000 },
      product2: { name: "Led: 150,000", price: 150000 },
    },
    {
      product1: { name: "20: 2.1mln", price: 2100000 },
      product2: { name: "Led: 200,000", price: 200000 },
    },
    {
      product1: { name: "25: 2.6mln", price: 2600000 },
      product2: { name: "Led: 250,000", price: 250000 },
    },
    {
      product1: { name: "30: 3.1mln", price: 3100000 },
      product2: { name: "Led: 300,000", price: 300000 },
    },
    {
      product1: { name: "35: 3.6mln", price: 3600000 },
      product2: { name: "Led: 350,000", price: 350000 },
    },
    {
      product1: { name: "40: 4.1mln", price: 4100000 },
      product2: { name: "Led: 400,000", price: 400000 },
    },
  ]);

  const handleClick = (product: Product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };
  const handleReset = () => {
    setSelectedProducts([]);
  };

  const buttonClass =
    "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";

  return (
    <div className="w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h1 className="text-xl font-bold text-white">Products</h1>

      <ul className="pt-4 space-y-2 text-m text-white list-none list-inside">
        {devices.map((device, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => handleClick(device.product1)}
              className={buttonClass}
            >
              <i className="text-gray-600 cursor-pointer">+</i>{" "}
              {device.product1.name}
            </button>

            <button
              type="button"
              onClick={() => handleClick(device.product2)}
              className={buttonClass}
            >
              <i className="text-gray-600 cursor-pointer">+</i>{" "}
              {device.product2.name}
            </button>

            <button
              type="button"
              onClick={() =>
                handleClick({ name: "mangal", price: device.product2.price })
              }
              className={buttonClass}
            >
              <i className="text-gray-600 cursor-pointer">+</i> mangal
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => handleReset()}
        className={buttonClass}
      >
        <i className="text-gray-400 cursor-pointer">reset</i>
      </button>
    </div>
  );
};

export default FormProducts;
