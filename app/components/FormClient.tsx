"use client";

import React from "react";

const FormClient = () => {
  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   // handle left form submit
      // }}
      className="w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
    >
      <h1 className="text-xl font-bold text-white">New Client</h1>
      {/* Company */}
      <input
        type="text"
        placeholder="Company"
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {/* Person */}
      <input
        type="text"
        placeholder="Person Name"
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {/* Tel */}
      <input
        type="tel"
        placeholder="Phone Number"
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {/* Lavozim */}
      <select className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
        <option>Lavozim</option>
        <option>CEO</option>
        <option>Manager</option>
        <option>Staff</option>
        <option>Other</option>
      </select>

      {/* Location */}
      <select className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
        <option>Location</option>
        <option>Tashkent</option>
        <option>Samarkand</option>
        <option>Bukhara</option>
        <option>Andijan</option>
        <option>Namangan</option>
        <option>Fergana</option>
        <option>Jizzakh</option>
        <option>Nukus</option>
        <option>Khiva</option>
        <option>Kokand</option>
      </select>

      {/* Product */}
      <input
        type="text"
        placeholder="Product"
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      {/* buttons */}
      {/* <>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          1.6mln: 15
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          1.8mln
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          2.1mln: 20
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          2.6mln: 25
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          3.1mln: 30
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          3.6mln: 35
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          4.1mln: 40
        </button>
      </> */}
      {/* Summa */}
      <input
        type="number"
        placeholder="Summa"
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {/* Status $ */}
      <select className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
        <option>Status</option>
        <option>Purchased</option>
        <option>Thinking</option>
        <option>Reject</option>
      </select>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 
                 dark:hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormClient;
