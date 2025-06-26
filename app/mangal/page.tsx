"use client";

import { useState } from "react";
import FormClient from "../../components/FormClient";
import FormProducts from "../../components/FormProducts";
import FormStaff from "../../components/FormStaff";
import TableRequests from "../../components/TableRequests";
import TablePaid from "../../components/TablePaid";
import FormLogin from "../../components/FormLogin";

export interface Product {
  name: string;
  price: number;
}

export default function MangalPage() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const statuses = ["Purchased", "Thinking", "Reject"];

  const handleClearSelectedProducts = () => {
    setSelectedProducts([]);
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">CRM: Izzat</h1>

      {/* Forms Section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <FormLogin />
        <FormClient
          selectedProducts={selectedProducts}
          clearSelectedProducts={handleClearSelectedProducts}
        />
        <FormProducts setSelectedProducts={setSelectedProducts} />
        <FormStaff />
      </div>

      {/* Search & Filter */}
      <div className="mb-6">
        {/* <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}

        {statuses.map((status) => (
          <button
            key={status}
            onClick={() =>
              setSelectedStatus((prev) => (prev === status ? null : status))
            }
            className={`px-4 py-2 mr-2 cursor-pointer rounded shadow transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 
      ${
        selectedStatus === status ? "bg-yellow-900" : "bg-gray-900"
      } text-white`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Tables */}
      <TableRequests selectedStatus={selectedStatus} />
      <TablePaid />
    </div>
  );
}
