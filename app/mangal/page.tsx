"use client";

import { useState } from "react";
import FormClient from "../../components/FormClient";
import FormProducts from "../../components/FormProducts";
import FormStaff from "../../components/FormStaff";
import TableRequests from "../../components/TableRequests";
import TablePaid from "../../components/TablePaid";
import FormLogin from "../../components/FormLogin";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { toast } from "sonner";

export interface Product {
  name: string;
  price: number;
}

export default function MangalPage() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  const statuses = ["Purchased", "Thinking", "Reject"];

  const handleClearSelectedProducts = () => {
    setSelectedProducts([]);
  };

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      toast.success("Logged out successfully");
      setUser(null);
    } catch (err) {
      toast.error("Error while logging out");
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const isFiruz =
    user?.displayName?.toLowerCase() === "firuz" ||
    user?.email?.toLowerCase() === "firuz@example.com";

  if (!user) {
    return (
      <div className="p-6">
        <FormLogin />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          CRM: {user.displayName || user.email || "User"}
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow"
        >
          Logout
        </button>
      </div>

      {/* Forms Section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <FormClient
          selectedProducts={selectedProducts}
          clearSelectedProducts={handleClearSelectedProducts}
        />
        <FormProducts setSelectedProducts={setSelectedProducts} />
        {isFiruz && <FormStaff />}
      </div>

      {/* Search & Filter */}
      <div className="mb-6">
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
