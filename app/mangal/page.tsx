"use client";
import { Forward } from "lucide-react";
import { useState } from "react";
import FormLogin from "../components/FormLogin";
import FormClient from "../components/FormClient";
import FormStaff from "../components/FormStaff";
import TableRequests from "../components/TableRequests";
import TablePaid from "../components/TablePaid";
import FormProducts from "../components/FormProducts";
export default function MangalPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">CRM: Izzat</h1>
      {/* inputs */}
      <div className="flex flex-col lg:flex-row justify-start gap-4 px-4 py-6">
        {/* <FormLogin /> */}
        <FormClient />
        <FormProducts />
        {/* <FormStaff /> */}
      </div>
      {/* search & filter */}
      <div>
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 mb-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 ml-2 cursor-pointer bg-gray-800 hover:bg-yellow-900 text-white rounded shadow 
             transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Purchased
        </button>
        <button
          className="px-4 py-2 ml-2 cursor-pointer bg-gray-900 hover:bg-yellow-900 text-white rounded shadow 
             transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Thinking
        </button>
        <button
          className="px-4 py-2 ml-2 cursor-pointer bg-gray-900 hover:bg-yellow-900 text-white rounded shadow 
             transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Pending
        </button>
        <button
          className="px-4 py-2 ml-2 cursor-pointer bg-gray-900 hover:bg-yellow-900 text-white rounded shadow 
             transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Finished
        </button>
      </div>
      {/* table requests */}
      <TableRequests />
      {/* table paid */}
      <TablePaid />
      <button
        className="px-4 py-2 mt-3 cursor-pointer bg-blue-900 hover:bg-blue-800 text-white rounded shadow 
             transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Download
      </button>
    </div>
  );
}
