"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Staff = {
  id: string;
  name: string;
};

const FormStaff = () => {
  const [staffName, setStaffName] = useState("");
  const [staffList, setStaffList] = useState<Staff[]>([
    { id: uuidv4(), name: "Aliyev Jamshid" },
    { id: uuidv4(), name: "Karimova Nargiza" },
    { id: uuidv4(), name: "Rustamov Diyor" },
    { id: uuidv4(), name: "Islomov Shoxrux" },
    { id: uuidv4(), name: "Sattorova Dilnoza" },
  ]);
  const [error, setError] = useState(false);
  const [showDeleteId, setShowDeleteId] = useState<string | null>(null);

  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffName.trim()) {
      setError(true);
      alert("Please enter a staff name.");
      return;
    }

    const newStaff: Staff = {
      id: uuidv4(),
      name: staffName.trim(),
    };

    setStaffList([...staffList, newStaff]);
    setStaffName("");
    setError(false);
  };

  const handleRightClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setShowDeleteId(id);

    setTimeout(() => {
      setShowDeleteId(null);
    }, 3000);
  };

  const handleDelete = (id: string) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
    setShowDeleteId(null);
  };

  const inputClass =
    `px-4 py-2 rounded border text-sm w-full bg-white dark:bg-gray-900 ` +
    `text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ` +
    `${error ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`;

  return (
    <form
      onSubmit={handleAddStaff}
      className="w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
    >
      <h1 className="text-xl font-bold text-white">New Staff</h1>

      <input
        type="text"
        placeholder="New Staff Name"
        value={staffName}
        onChange={(e) => {
          setStaffName(e.target.value);
          if (error) setError(false);
        }}
        className={inputClass}
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
        {staffList.map((staff) => (
          <li
            key={staff.id}
            onContextMenu={(e) => handleRightClick(e, staff.id)}
            className="relative"
          >
            {staff.name}
            {showDeleteId === staff.id && (
              <span
                onClick={() => handleDelete(staff.id)}
                className="ml-2 cursor-pointer text-red-400 font-semibold animate-pulse"
              >
                DELETE
              </span>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default FormStaff;
