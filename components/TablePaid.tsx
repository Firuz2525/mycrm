"use client";

import React from "react";
import * as XLSX from "xlsx";

const TablePaid = () => {
  const headers = [
    "ID",
    "Date",
    "Company",
    "Person",
    "Lavozim",
    "Tel",
    "Location",
    "Product",
    "Summa",
    "Status",
    "Staff",
    "Process",
  ];
  const paidData = [
    {
      id: "005",
      date: "2024-06-20",
      company: "SkyCom",
      person: "Gulbahor Yusupova",
      tel: "+998 95 777 00 99",
      lavozim: "Manager",
      location: "Bukhara",
      product: "Fiber Router",
      summa: 320,
      status: "Purchased",
      process: "Paid",
      staff: "Shahlo",
    },
    {
      id: "006",
      date: "2024-06-20",
      company: "MedExpress",
      person: "Abdurahmon Tursunov",
      tel: "+998 91 222 33 44",
      lavozim: "CEO",
      location: "Fergana",
      product: "Barcode Scanner",
      summa: 250,
      status: "Thinking",
      process: "Paid",
      staff: "Jamshid",
    },
    {
      id: "007",
      date: "2024-06-20",
      company: "SmartWare",
      person: "Sevinch Mamatova",
      tel: "+998 90 444 66 88",
      lavozim: "Staff",
      location: "Nukus",
      product: "POS Terminal",
      summa: 890,
      status: "Purchased",
      process: "Paid",
      staff: "Lola",
    },
    {
      id: "008",
      date: "2024-06-20",
      company: "AgroTech",
      person: "Ibrohim Toshpulatov",
      tel: "+998 93 999 55 11",
      lavozim: "Manager",
      location: "Jizzakh",
      product: "Drone (Agro)",
      summa: 3100,
      status: "Reject",
      process: "Paid",
      staff: "Rustam",
    },
    {
      id: "009",
      date: "2024-06-20",
      company: "Edutools",
      person: "Malika Rahmatova",
      tel: "+998 94 222 11 77",
      lavozim: "Other",
      location: "Kokand",
      product: "Projector",
      summa: 750,
      status: "Thinking",
      process: "Paid",
      staff: "Azamat",
    },
    {
      id: "010",
      date: "2024-06-20",
      company: "FastPrint",
      person: "Oybek Qodirov",
      tel: "+998 90 888 77 66",
      lavozim: "CEO",
      location: "Khiva",
      product: "HP LaserJet Pro",
      summa: 470,
      status: "Purchased",
      process: "Paid",
      staff: "Dilshod",
    },
  ];
  const total = paidData.reduce((acc, curr) => acc + curr.summa, 0);
  const handleExportToExcel = () => {
    const dataRows = paidData.map((row) => [
      row.id,
      row.date,
      row.company,
      row.person,
      row.lavozim,
      row.tel,
      row.location,
      row.product,
      row.summa,
      row.status,
      row.staff,
      row.process,
    ]);

    // Append total row
    dataRows.push(["", "", "", "", "", "", "", "Total", total, "", "", ""]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "PaidClients");
    XLSX.writeFile(workbook, "paid_clients.xlsx");
  };
  return (
    <div className="mt-5">
      <table className="w-full text-left text-gray-500 dark:text-gray-300">
        <thead className="text-xs uppercase bg-gray-500 dark:bg-gray-900 dark:text-gray-300">
          <tr>
            {headers.map((title) => (
              <th key={title} className="px-3 py-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paidData.map((row) => (
            <tr
              key={row.id}
              className="bg-gray-100 dark:bg-black border-b dark:border-gray-700"
            >
              <td className="px-2 py-2">{row.id}</td>
              <td className="px-2 py-2">{row.date}</td>
              <td className="px-2 py-2">{row.company}</td>
              <td className="px-2 py-2">{row.person}</td>
              <td className="px-2 py-2">{row.lavozim}</td>
              <td className="px-2 py-2">{row.tel}</td>
              <td className="px-2 py-2">{row.location}</td>
              <td className="px-2 py-2">{row.product}</td>
              <td className="px-2 py-2">${row.summa.toLocaleString()}</td>
              <td className="px-2 py-2">{row.status}</td>
              <td className="px-2 py-2">{row.staff}</td>
              <td className="px-2 py-2">{row.process}</td>
            </tr>
          ))}
          <tr className="bg-green-100 dark:bg-gray-900 font-bold">
            <td colSpan={8}></td>
            <td className="px-2 py-2">${total.toLocaleString()}</td>
            <td colSpan={3}></td>
          </tr>
        </tbody>
      </table>

      <div className="mt-2">
        <button
          onClick={handleExportToExcel}
          className="px-4 py-2 bg-cyan-800 hover:bg-cyan-900 text-white rounded shadow transition duration-200"
        >
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default TablePaid;
