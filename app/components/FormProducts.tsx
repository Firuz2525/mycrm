"use client";

import React, { useState } from "react";

const FormProducts = () => {
  const [mangals, setMangals] = useState([{}]);
  const [devices, setDevices] = useState([
    {
      1: "15: 1.5mln",
      2: "Led: 150,000",
      first: 1500000,
      second: 150000,
    },
    { 1: "20: 2.1mln", 2: "Led: 200,000", first: 2100000, second: 200000 },
    { 1: "25: 2.6mln", 2: "Led: 250,000", first: 2600000, second: 250000 },
    { 1: "30: 3.1mln", 2: "Led: 300,000", first: 3100000, second: 300000 },
    { 1: "35: 3.6mln", 2: "Led: 350,000", first: 3600000, second: 350000 },
    { 1: "40: 4.1mln", 2: "Led: 400,000", first: 4100000, second: 400000 },
  ]);
  return (
    <div className="w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h1 className="text-xl font-bold text-white">Products</h1>

      {/* Product List */}
      <ul className="pt-4 space-y-2 text-m text-white list-none list-inside">
        {devices.map((name, index) => (
          <li key={index}>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <i className="text-gray-600 cursor-pointer">+</i>
              {name[1]}
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <i className="text-gray-600 cursor-pointer">+</i>
              {name[2]}
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <i className="text-gray-600 cursor-pointer">+</i>
              mangal
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormProducts;
