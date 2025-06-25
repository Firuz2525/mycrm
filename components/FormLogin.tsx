"use client";

import React from "react";

const FormLogin = () => {
  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   // handle left form submit
      // }}
      className="w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
    >
      <h1 className="text-xl font-bold text-white">Login</h1>

      {/* Person */}
      <input
        type="text"
        placeholder="Name"
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      {/* Password */}
      <input
        type="text"
        placeholder="Password"
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 
                 dark:hover:bg-blue-600"
      >
        Sign in
      </button>
    </form>
  );
};

export default FormLogin;
