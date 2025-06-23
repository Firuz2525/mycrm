"use client";

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Product = {
  name: string;
  price: number;
};

type FormClientProps = {
  selectedProducts: Product[];
};

const FormClient: React.FC<FormClientProps> = ({ selectedProducts }) => {
  const [company, setCompany] = useState("");
  const [person, setPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [lavozim, setLavozim] = useState("");
  const [location, setLocation] = useState("");
  const [product, setProduct] = useState("");
  const [summa, setSumma] = useState<number | string>("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (selectedProducts.length > 0) {
      const names = selectedProducts.map((p) => p.name).join(" + ");
      const total = selectedProducts.reduce((acc, cur) => acc + cur.price, 0);
      setProduct(names);
      setSumma(total);
    }
  }, [selectedProducts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const formattedDate = now.toLocaleString(); // e.g., "6/20/2025, 2:35:00 PM"
    const uniqueId = uuidv4();

    // Validate required fields
    if (
      !company.trim() ||
      !person.trim() ||
      !phone.trim() ||
      !lavozim ||
      !location ||
      !product.trim() ||
      !summa ||
      !status
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    console.log({
      id: uniqueId,
      date: formattedDate,
      company,
      person,
      phone,
      lavozim,
      location,
      product,
      summa,
      status,
    });
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
