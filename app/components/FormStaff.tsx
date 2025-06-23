"use client";

import React, { useState } from "react";

const FormStaff = () => {
  const [staffList, setStaffList] = useState([
    "Aliyev Jamshid",
    "Karimova Nargiza",
    "Rustamov Diyor",
    "Islomov Shoxrux",
    "Sattorova Dilnoza",
  ]);
  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   // handle left form submit
      // }}
      className="w-full md:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
    >
      <h1 className="text-xl font-bold text-white">New Staff</h1>
      <input
        type="text"
        placeholder="New Staff Name"
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded 
                 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-700 
                 dark:hover:bg-green-800"
      >
        Add Staff
      </button>
      {/* Staff List */}
      <ul className="pt-4 space-y-2 text-m text-white list-decimal list-inside">
        {staffList.map((name, index) => (
          <li key={index}>
            {name} <i className="text-gray-600 cursor-pointer">delete</i>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default FormStaff;
