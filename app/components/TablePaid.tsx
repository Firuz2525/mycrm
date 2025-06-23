"use client";

import React from "react";

const TablePaid = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-300">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green-800 dark:text-gray-300">
          <tr>
            <th scope="col" className="px-3 py-2">
              ID
            </th>
            <th scope="col" className="px-3 py-2">
              Date
            </th>
            <th scope="col" className="px-3 py-2">
              Company
            </th>
            <th scope="col" className="px-3 py-2">
              Person
            </th>
            <th scope="col" className="px-3 py-2">
              Lavozim
            </th>
            <th scope="col" className="px-3 py-2">
              Tel
            </th>
            <th scope="col" className="px-3 py-2">
              Location
            </th>
            <th scope="col" className="px-3 py-2">
              Product
            </th>
            <th scope="col" className="px-3 py-2">
              Summa
            </th>
            <th scope="col" className="px-3 py-2">
              $tatus
            </th>
            <th scope="col" className="px-3 py-2">
              Staff (assigned)
            </th>
            <th scope="col" className="px-3 py-2">
              Process
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              id: "005",
              company: "SkyCom",
              person: "Gulbahor Yusupova",
              tel: "+998 95 777 00 99",
              lavozim: "Manager",
              location: "Bukhara",
              product: "Fiber Router",
              summa: "$320",
              status: "Purchased",
              process: "Paid",
              staff: "Shahlo",
            },
            {
              id: "006",
              company: "MedExpress",
              person: "Abdurahmon Tursunov",
              tel: "+998 91 222 33 44",
              lavozim: "CEO",
              location: "Fergana",
              product: "Barcode Scanner",
              summa: "$250",
              status: "Thinking",
              process: "Paid",
              staff: "Jamshid",
            },
            {
              id: "007",
              company: "SmartWare",
              person: "Sevinch Mamatova",
              tel: "+998 90 444 66 88",
              lavozim: "Staff",
              location: "Nukus",
              product: "POS Terminal",
              summa: "$890",
              status: "Purchased",
              process: "Paid",
              staff: "Lola",
            },
            {
              id: "008",
              company: "AgroTech",
              person: "Ibrohim Toshpulatov",
              tel: "+998 93 999 55 11",
              lavozim: "Manager",
              location: "Jizzakh",
              product: "Drone (Agro)",
              summa: "$3100",
              status: "Reject",
              process: "Paid",
              staff: "Rustam",
            },
            {
              id: "009",
              company: "Edutools",
              person: "Malika Rahmatova",
              tel: "+998 94 222 11 77",
              lavozim: "Other",
              location: "Kokand",
              product: "Projector",
              summa: "$750",
              status: "Thinking",
              process: "Paid",
              staff: "Azamat",
            },
            {
              id: "010",
              company: "FastPrint",
              person: "Oybek Qodirov",
              tel: "+998 90 888 77 66",
              lavozim: "CEO",
              location: "Khiva",
              product: "HP LaserJet Pro",
              summa: "$470",
              status: "Purchased",
              process: "Paid",
              staff: "Dilshod",
            },
          ].map((row, i) => (
            <tr
              key={row.id}
              className="bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700"
            >
              <td className="px-1 py-1">{row.id}</td>
              <td className="px-1 py-1">{row.company}</td>
              <td className="px-1 py-1">{row.company}</td>
              <td className="px-1 py-1">{row.person}</td>
              <td className="px-1 py-1">{row.lavozim}</td>
              <td className="px-1 py-1">{row.tel}</td>
              <td className="px-1 py-1">{row.location}</td>
              <td className="px-1 py-1">{row.product}</td>
              <td className="px-1 py-1">{row.summa}</td>
              <td className="px-1 py-1">{row.status}</td>
              <td className="px-1 py-1">{row.staff}</td>
              <td className="px-1 py-1">{row.process}</td>
            </tr>
          ))}
          <tr
            key="apg"
            className="bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700"
          >
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1">900,000</td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
            <td className="px-1 py-1"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePaid;
