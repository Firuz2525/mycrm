"use client";

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Settings } from "lucide-react";
import { toast } from "sonner";

type Product = {
  name: string;
  price: number;
};

type FormClientProps = {
  selectedProducts: Product[];
  clearSelectedProducts: () => void;
};

const FormClient: React.FC<FormClientProps> = ({
  selectedProducts,
  clearSelectedProducts,
}) => {
  const [company, setCompany] = useState("");
  const [person, setPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [lavozim, setLavozim] = useState("");
  const [location, setLocation] = useState("");
  const [product, setProduct] = useState("");
  const [summa, setSumma] = useState<number | string>("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (selectedProducts.length > 0) {
  //     const names = selectedProducts.map((p) => p.name).join(" + ");
  //     const total = selectedProducts.reduce((acc, cur) => acc + cur.price, 0);
  //     setProduct(names);
  //     setSumma(total);
  //   }
  // }, [selectedProducts]);
  useEffect(() => {
    if (selectedProducts.length > 0) {
      const names = selectedProducts.map((p) => p.name).join(" + ");
      const total = selectedProducts.reduce((acc, cur) => acc + cur.price, 0);
      setProduct(names);
      setSumma(total);
    } else {
      setProduct(""); // <-- clear the input value
      setSumma(0); // <-- reset the sum
    }
  }, [selectedProducts]);

  const getStaffName = () => {
    // return staffName; // for now
    return auth.currentUser?.displayName || "Unknown";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const now = new Date();
    // const formattedDate = now.toLocaleString();
    const date = new Date();
    const uniqueId = uuidv4();

    const trimmedCompany = company.trim();
    const trimmedPerson = person.trim();
    const trimmedPhone = phone.trim();
    const trimmedProduct = product.trim();

    if (
      !trimmedCompany ||
      !trimmedPerson ||
      !trimmedPhone ||
      !lavozim ||
      !location ||
      !trimmedProduct ||
      !summa ||
      !status
    ) {
      alert("Please fill in all fields before submitting.");
      setLoading(false);
      return;
    }

    const newClient = {
      id: uniqueId,
      date,
      company: trimmedCompany,
      person: trimmedPerson,
      phone: trimmedPhone,
      lavozim,
      location,
      product: trimmedProduct,
      summa: Number(summa),
      status,
      staff: getStaffName(), // could be hardcoded or dynamic from auth
      process: "pending",
    };

    try {
      await addDoc(collection(db, "clients"), newClient);
      // alert("Client added successfully");
      toast.success(`Client is added successfully!`);

      // Clear form fields (assuming you use useState)
      setCompany("");
      setPerson("");
      setPhone("");
      setLavozim("");
      setLocation("");
      setProduct("");
      clearSelectedProducts(); // <- reset parent state
      setSumma("");
      setStatus("");
    } catch (err) {
      console.error("❌ Error adding document:", err);
      alert("Failed to add client");
      toast.error("Failed to add client");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const inputClass =
    "px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full";

  return (
    <form
      className="w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-bold text-white">New Client</h1>

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className={inputClass}
      />

      <input
        type="text"
        placeholder="Person Name"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        className={inputClass}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={inputClass}
      />

      <select
        value={lavozim}
        onChange={(e) => setLavozim(e.target.value)}
        className={inputClass}
      >
        <option value="" disabled hidden>
          Lavozim
        </option>
        <option value="CEO">CEO</option>
        <option value="Manager">Manager</option>
        <option value="Staff">Staff</option>
        <option value="Other">Other</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={inputClass}
      >
        <option value="" disabled hidden>
          Location
        </option>
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

      <textarea
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className={inputClass}
      />

      <input
        type="number"
        placeholder="Summa"
        value={summa}
        onChange={(e) => setSumma(e.target.value)}
        className={inputClass}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={inputClass}
      >
        <option value="" disabled hidden>
          Status
        </option>
        <option>Purchased</option>
        <option>Thinking</option>
        <option>Reject</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded 
             focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 
             dark:hover:bg-blue-600 flex items-center justify-center gap-2"
      >
        {loading ? (
          <Settings className="w-5 h-5 animate-spin text-white" />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default FormClient;
